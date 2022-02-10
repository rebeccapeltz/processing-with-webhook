require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// get all the rejected videos in the Google moderation Q
async function getRejectedQ() {
  try {
    const rejectedQ = await cloudinary.api.resources_by_moderation(
      'google_video_moderation',
      'rejected',
      {
        resource_type: 'video',
      }
    );

    // return the promise
    return rejectedQ;
  } catch (error) {
    console.log('get approved Q error', JSON.stringify(error, null, 2));
  }
}

// destroy rejected videos
async function destroyVideo(video) {
  console.log('in destroy video', video.public_id);
  try {
    const destroyResponse = cloudinary.uploader.destroy(video.public_id, {
      invalidate: true,
      resource_type: 'video',
    });
    console.log('destroy response', JSON.stringify(destroyResponse, null, 2));
    return destroyResponse;
  } catch (error) {
    console.log('destroy error', JSON.stringify(error, null, 2));
  }
}

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
    const rejectedQ = await getRejectedQ();
    console.log('q', rejectedQ);
    console.log('q resources', rejectedQ.resources);
    for (let i = 0; i < rejectedQ.resources.length; i++) {
      let video = rejectedQ.resources[i];
      let destroyResponse = await destroyVideo(video);
      console.log('destroy response', JSON.stringify(destroyResponse, null, 2));
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'rejected destroy success' }),
    };
  } catch (error) {
    console.error('error', JSON.stringify(error, 0, 2));

    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
