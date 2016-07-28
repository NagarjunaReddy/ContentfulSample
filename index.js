var contentful = require('contentful-management');
var client = contentful.createClient({
accessToken: '0caaca5a8c810858e5bc35d2de251839d48b7de738b75e7a5d398a609fd21d60'
});

client.getSpace('rfrx26grrtnm').then(function(space){
//  console.log('internal space',space);
  space.getContentType('sampleProduct').then(function(userContentType) {
  //  console.log('userContentType',userContentType);
    //Fetch collection of entries
    space.getEntries({content_type: 'sampleProduct', 'fields.test[match]': 'Naga'}).then(function(collection) {
        console.info('fields 2222',JSON.stringify(collection.items[0].fields));
    });
    space.createEntry('sampleProduct', {
        sys: {
            id: 'sampleProduct',
            //version: 2
        },
        fields: {
            test: {
                'en-US': 'Reddy'
            },
            mail: {
                'en-US': 'asfaf@af.com'
            },
            phone: {
                'en-US': '87489147189'
            }
        }
    }).then(function(entry){
        console.info(arguments);
        //Fetch collection of entries
        // space.getEntries({content_type: 'sampleProduct'}).then(function(collection) {
        //     console.info('fields 2222',JSON.stringify(collection.items));
        // });
        //Publish an Entry, making it visible to the [Content Delivery API][].
        space.publishEntry(entry);
    }, function(obj){
        console.info("=== Failed because of something ===", obj);
    });


    // // Updating the Entry
    // space.updateEntry({
    //     sys: {
    //         id: 'sampleProduct',
    //     },
    //     fields: {
    //       test: {
    //           'en-US': 'Arj'
    //       },
    //       mail: {
    //           'en-US': 'asfaf@af.com'
    //       },
    //       phone: {
    //           'en-US': '87489147189'
    //       }
    //     }
    // }).then(function(entry){
    //     console.info(arguments);
    //     //Publish an Entry, making it visible to the [Content Delivery API][].
    //     space.publishEntry(entry);
    // }, function(obj){
    //     console.info("=== Failed because of something ===", obj);
    // });


  });
},function(error){
  console.log('error',error);
});
