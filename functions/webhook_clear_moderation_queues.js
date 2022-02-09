require('dotenv').config();
const cloudinary = require('cloudinary').v2;

exports.handler = async function (event, context) {
  // exit if not a post
  if (!event.body || event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        status: 'invalid-method',
      }),
    };
  }

  try {
    // get a list of approved and move out of moderation and set as public
    const approvedQ = await cloudinary.api.resources_by_moderation(
      'google_video_moderation',
      'approved',
      {
        resource_type: 'video',
      }
    );

    // review approved videos in Q
    approvedQ.resources.forEach((video) => {
      if (
        video.type === 'authenticated' &&
        video.public_id.startsWith('moderated/')
      ) {
        // original public id is 'moderated/<public id>
        const newPublicId = video.public_id.substring(10);
        console.log(
          'video.public_id',
          video.public_id,
          'newPublicID',
          newPublicId
        );
        // rename to move to root folder and make public
        const response = cloudinary.uploader.rename(
          video.public_id,
          newPublicId,
          {
            resource_type: 'video',
            type: 'authenticated',
            to_type: 'upload',
            invalidate: true,
            overwrite: true,
          }
        );
        console.log(
          'new version url:',
          cloudinary.url(response.public_id, {
            resource_type: 'video',
            format: response.format,
          })
        );
      }
      return {
        statusCode: response[0].statusCode,
        body: JSON.stringify({ message: "approval review success" }),
      };
    });
  } catch (error) {
    console.error('error', JSON.stringify(error, 0, 2));

    return {
      statusCode: error.code,
      body: error.response.body.errors[0].message,
    };
  }
};
