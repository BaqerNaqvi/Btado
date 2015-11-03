define(["ko", "underscore", "underscore-ko"], function(ko) {

    var // ReSharper disable InconsistentNaming
        parentHireGroup = function (specparentHireGroupId, specifiedhireGroupId, specifiedtitle, specifiedsubTitle,
           desphotoUrl, specifiedDescription, spcphotoTumbnailUrl,hgName) {
            var parentHireGroupId = ko.observable(specparentHireGroupId),
                hireGroupId = ko.observable(specifiedhireGroupId),
                title = ko.observable(specifiedtitle),
                subTitle = ko.observable(specifiedsubTitle),
                photoUrl = ko.observable(desphotoUrl),
                description = ko.observable(specifiedDescription),
                photoTumbnailUrl = ko.observable(spcphotoTumbnailUrl),
                hireGroupName = ko.observable(hgName),
              
                errors = ko.validation.group({                    
                    
                }),
                // Is Valid
                isValid = ko.computed(function() {
                    return errors().length === 0;
                }),
                dirtyFlag = new ko.dirtyFlag({
                   
                }),
                // Has Changes
                hasChanges = ko.computed(function() {
                    return dirtyFlag.isDirty();
                }),
                // Reset
                reset = function() {
                    dirtyFlag.reset();
                },
                // Convert to server data
                convertToServerData = function() {
                    return {
                        ParentHireGroupDescId:parentHireGroupId(),
                        HireGroupId:hireGroupId(),
                        Title:title(),
                        SubTitle:subTitle(),
                        PhotoUrl:photoUrl(),
                        Description: description()
                    };
                };
            return {
                parentHireGroupId: parentHireGroupId,
                hireGroupId: hireGroupId,
                title: title,
                subTitle: subTitle,
                photoUrl: photoUrl,
                description: description,
                photoTumbnailUrl: photoTumbnailUrl,
                hireGroupName:hireGroupName,
               
                hasChanges: hasChanges,
                reset: reset,
                convertToServerData: convertToServerData,
                isValid: isValid,
                errors: errors
            };
        };

    //server to client mapper For Hire Group Category 
    var parentHireGroupServertoClientMapper = function (itemFromServer) {
        return new parentHireGroup(itemFromServer.ParentHireGroupDescId, itemFromServer.HireGroupId, itemFromServer.Title,
            itemFromServer.SubTitle, itemFromServer.PhotoUrl, itemFromServer.Description, itemFromServer.PhotoTumbnailUrl, itemFromServer.HireGroupName);
    };
    // Function to attain cancel button functionality
    parentHireGroup.CreateFromClientModel = function (item) {
        return new parentHireGroup(item.parentHireGroupId, item.hireGroupId, item.title,
            item.subTitle, item.photoUrl, item.description, item.photoTumbnailUrl, item.hireGroupName);
    };
    

    return {
        parentHireGroup: parentHireGroup,
        parentHireGroupServertoClientMapper: parentHireGroupServertoClientMapper,
        
        
    };
});