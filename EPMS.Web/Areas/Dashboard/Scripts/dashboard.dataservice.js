/*
    Data service module with ajax calls to the server
*/
define("dashboard/dashboard.dataservice", function () {

    // Data service for forecast 
    var dataService = (function () {
        var
            // True if initialized
            isInitialized = false,
            // Initialize
            initialize = function() {
            if (!isInitialized) {
              
                //Save Hire Group Image
                amplify.request.define('saveParentHireGroup', 'ajax', {
                    url: ist.siteUrl + '/Api/ParentHireGroupDes',
                    dataType: 'json',
                    decoder: amplify.request.decoders.istStatusDecoder,
                    type: 'POST'
                });
                //Edit Hire Group Images
                amplify.request.define('editHireGroupImage', 'ajax', {
                    url: ist.siteUrl + '/Api/HireGroupImageDetail',
                    dataType: 'json',
                    decoder: amplify.request.decoders.istStatusDecoder,
                    type: 'GET'
                });
                //Search Group Images
                amplify.request.define('searchParentHireGroups', 'ajax', {
                    url: ist.siteUrl + '/Api/ParentHireGroupDes',
                    dataType: 'json',
                    decoder: amplify.request.decoders.istStatusDecoder,
                    type: 'GET'
                });
                //Delete Hire Group Image
                amplify.request.define('deleteHireGroupImage', 'ajax', {
                    url: ist.siteUrl + '/Api/HireGroupImage',
                    dataType: 'json',
                    decoder: amplify.request.decoders.istStatusDecoder,
                    type: 'DELETE'
                });
                isInitialized = true;
            }
        },
       
              // Search Hire Groups
            searchParentHireGroups = function (params, callbacks) {
                initialize();
                return amplify.request({
                    resourceId: 'searchParentHireGroups',
                    success: callbacks.success,
                    error: callbacks.error,
                    data: params
                });
            },
            //get Departments
            editHireGroupImage = function (params, callbacks) {
                initialize();
                return amplify.request({
                    resourceId: 'editHireGroupImage',
                    success: callbacks.success,
                    error: callbacks.error,
                    data: params
                });
            },
            //Save Parent Hire Group
            saveParentHireGroup = function (params, callbacks) {
                return amplify.request({
                    resourceId: 'saveParentHireGroup',
                    success: callbacks.success,
                    error: callbacks.error,
                    data: params
                });
            },
            //delete Department
            deleteHireGroupImage = function (params, callbacks) {
                initialize();
                return amplify.request({
                    resourceId: 'deleteHireGroupImage',
                    success: callbacks.success,
                    error: callbacks.error,
                    data: params
                });
            };

        return {
            editHireGroupImage: editHireGroupImage,
            saveParentHireGroup: saveParentHireGroup,
            deleteHireGroupImage: deleteHireGroupImage,
            searchParentHireGroups: searchParentHireGroups
        };
    })();
    return dataService;
});