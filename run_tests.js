const newman = require('newman'); // require Newman in your project

// call newman.run to pass the `options` object and wait for callback
newman.run({
    collection: require('/Users/supriyasharma/projects/postman_collection/test_storecollection/SwaggerPetstore.postman_collection.json'),
    reporters: ['cli','html'],
    reporter: {
        html: {
            export: '/Users/supriyasharma/projects/postman_collection/test_storecollection/newman_report.html', // Path to save HTML report
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});