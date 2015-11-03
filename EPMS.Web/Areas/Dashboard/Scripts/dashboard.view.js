/*
    View for the department. Used to keep the viewmodel clear of UI related logic
*/
define("dashboard/dashboard.view",
    ["jquery", "dashboard/dashboard.viewModel"], function ($, parentHireGroupViewModel) {
        var ist = window.ist || {};
        // View 
        ist.ParentHireGroup.view = (function (specifiedViewModel) {
            var
                // View model 
                viewModel = specifiedViewModel,
                // Binding root used with knockout
                bindingRoot = $("#dashBoardHomeBindingSpot")[0],
                // Initialize
                initialize = function () {
                    if (!bindingRoot) {
                        return;
                    }
                    // Handle Sorting
                 //   handleSorting("departmentTable", viewModel.sortOn, viewModel.sortIsAsc, viewModel.getDepartments);
                };
            initialize();
            return {
                bindingRoot: bindingRoot,
                viewModel: viewModel
            };
        })(parentHireGroupViewModel);
        // Initialize the view model
        if (ist.ParentHireGroup.view.bindingRoot) {
            parentHireGroupViewModel.initialize(ist.ParentHireGroup.view);
        }
        return ist.ParentHireGroup.view;
    });
