require('dotenv').config();
const cloudinary = require('cloudinary').v2;


const manifest = {
    w: 500,
    h: 500,
    du: 30,
    fps: 20,
    vars: {
      transition: "s:circlecrop",
      sdur: 3000,
      tdur: 1500,
      slides: [
        {
          media: "i:multi:garden",
        },
        {
          media: "i:multi:butterfly-blue",
        },
        {
          media: "i:multi:butterflies",
        },
       
        
      ],
    },
  };

cloudinary.uploader
  .create_slideshow({
    public_id:"slide-show",
    notification_url: 'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d',
    manifest_json: JSON.stringify(manifest)
      
    // manifest_transformation: {
    
    //   custom_function: {
    //     function_type: 'render',
    //     source:
    //       'w_500;h_500;du_25;vars_(sdur_3000;tdur_1500;transition_s:circlecrop;slides_((media_i:multi:butterfly-blue);(media_i:multi:garden);(media_i:butterflies)))',
    //   },
    // },
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
