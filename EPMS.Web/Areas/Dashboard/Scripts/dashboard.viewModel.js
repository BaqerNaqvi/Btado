/*
    Module with the view model for the Dashboard
*/
define("dashboard/dashboard.viewModel",
    ["jquery", "amplify", "ko", "dashboard/dashboard.dataservice", "dashboard/dashboard.model"],
    function($, amplify, ko, dataservice, model) {
        var ist = window.ist || {};
        ist.ParentHireGroup = {
            viewModel: (function() {
                var view,
                    //  Array
                    parentHireGroups = ko.observableArray([]),
                   
                    //pager
                    pager = ko.observable(),
                    //sorting
                    sortOn = ko.observable(1),
                    //Assending  / Desending
                    sortIsAsc = ko.observable(true),
                    //to control the visibility of editor sec
                    isDepartmentEditorVisible = ko.observable(false),
                    //to control the visibility of filter sec
                    filterSectionVisilble = ko.observable(false),
                      // Editor View Model
                    editorViewModel = new ist.ViewModel(model.hireGroupImage),
                    //selected Parent HG
                    selectedParentHireGroup = editorViewModel.itemForEditing,

                    //save button handler
                    onSaveHireGroupImage = function () {
                        saveParentHireGroup(selectedParentHireGroup());
                    },
                    //cancel button handler
                    onCancelDepartment = function () {
                        editorViewModel.revertItem();
                        isDepartmentEditorVisible(false);
                    },
                
                  
                    // save department
                    saveParentHireGroup = function (item) {
                        dataservice.saveParentHireGroup(item.convertToServerData(), {
                            success: function (uodateddeObj) {
                                isDepartmentEditorVisible(false);
                                toastr.success(ist.resourceText.SaveSuccessMessage);
                            },
                            error: function (exceptionMessage, exceptionType) {
                              
                                if (exceptionType === ist.exceptionType.CaresGeneralException)
                                    toastr.error(exceptionMessage);
                                else
                                    toastr.error(ist.resourceText.SaveFailError);
                            }
                        });
                    },
                   
                  
                    //get org group list from Dataservice
                    onEditHireGroupImage = function(item) {
                        selectedParentHireGroup(item);
                        isDepartmentEditorVisible(true);
                    },
                    //get org group list from Dataservice
                    searchHireGroupImages = function () {
                        dataservice.searchParentHireGroups(
                            {
                               // PageSize: pager().pageSize(),
                             //   PageNo: pager().currentPage(),
                                SortBy: sortOn(),
                                IsAsc: sortIsAsc()
                            },
                            {
                                success: function (data) {
                                    parentHireGroups.removeAll();
                                   // pager().totalCount(data.TotalCount);
                                    _.each(data.ParentHireGroupDesc, function (item) {
                                        parentHireGroups.push(model.parentHireGroupServertoClientMapper(item));
                                    });

                                },
                                error: function () {
                                    toastr.error(ist.resourceText.DepartmentLoadFailError);
                                }
                            });
                    },
               
                    // Initialize the view model
                    initialize = function (specifiedView) {
                        view = specifiedView;
                        ko.applyBindings(view.viewModel, view.bindingRoot);
                      //  pager(pagination.Pagination({ PageSize: 10 }, parentHireGroups, searchHireGroupImages));
                     //   searchHireGroupImages();
                    };
                return {
                    isDepartmentEditorVisible: isDepartmentEditorVisible,
                    initialize: initialize,
                    sortOn: sortOn,
                    onEditHireGroupImage: onEditHireGroupImage,
                    sortIsAsc: sortIsAsc,
                  
                    pager: pager,
                    selectedParentHireGroup: selectedParentHireGroup,
                    onSaveHireGroupImage: onSaveHireGroupImage,
                    parentHireGroups: parentHireGroups,
                    onCancelDepartment: onCancelDepartment,
                };
            })()
        };
        return ist.ParentHireGroup.viewModel;
    });
