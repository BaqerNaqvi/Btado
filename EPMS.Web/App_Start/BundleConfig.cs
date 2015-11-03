using System.Web.Optimization;

namespace IdentitySample
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            //            "~/Scripts/jquery-{version}.js"));


            // Frontend JS
            bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
                       "~/Scripts/jquery-1.11.0.min.js",
                       "~/Scripts/jquery-migrate-1.2.1.min.js",
                       "~/Scripts/bootstrap.min.js",
                       "~/Scripts/jquery.themepunch.plugins.min.js",
                       "~/Scripts/jquery.themepunch.revolution.min.js",
                       "~/Scripts/jquery.themepunch.tools.min.js",
                       "~/Scripts/back-to-top.js",
                       "~/Scripts/components-knob-dials.js",
                       "~/Scripts/jquery.fancybox.pack.js",
                       "~/Scripts/jquery.knob.js",
                       "~/Scripts/layout.js",
                       "~/Scripts/owl.carousel.min.js",
                       "~/Scripts/respond.js",
                       "~/Scripts/amplify.js",
                       "~/Scripts/knockout-3.1.0.js",
                       "~/Scripts/knockout.mapping-latest.js",
                       "~/Scripts/knockout.validation.js",
                       "~/Scripts/metronic.js",
                       "~/Scripts/moment.js",
                       "~/Scripts/respond.min.js",
                       "~/Scripts/revo-slider-init.js",
                       "~/Scripts/toastr.js",
                        "~/Scripts/underscore.js",
                       "~/Scripts/underscore-ko-1.6.0.js",
                       "~/Scripts/require.js"
                       )
                       );

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            // Frontend Template CSS
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/Site.css",
                      "~/Content/blue.css",
                      "~/Content/components.css",
                      "~/Content/custom.css",
                      "~/Content/font-awesome.min.css",
                      "~/Content/gray.css",
                      "~/Content/green.css",
                      "~/Content/jquery.fancybox.css",
                      "~/Content/orange.css",
                      "~/Content/owl.carousel.css",
                      "~/Content/plugins.css",
                      "~/Content/red.css",
                      "~/Content/settings.css",
                      "~/Content/style-responsive.css",
                      "~/Content/style-revolution-slider.css",
                      "~/Content/style.css",
                      "~/Content/turquoise.css",
                      "~/Content/toastr.css"
                                            ));

            // Admin Layout CSS
            bundles.Add(new StyleBundle("~/Content/Admin").Include(
                     "~/Content/bootstrap.min.css",
                     "~/Content/Account/bootstrap-switch.min.css",
                     "~/Content/components.css",
                     "~/Content/plugins.css",
                     "~/Content/Account/layout.css",
                     "~/Content/Account/default.css",
                     "~/Content/Account/custom.css",
                     "~/Content/Dashboard/tasks.css",
                     "~/Content/Dashboard/jquery.gritter.css",
                     "~/Content/Dashboard/daterangepicker-bs3.css",
                     "~/Content/Dashboard/fullcalendar.css",
                     "~/Content/Dashboard/jqvmap.css",
                     "~/Content/Account/uniform.default.css",
                     "~/Content/Dashboard/simple-line-icons.min.css",
                     "~/Content/font-awesome.min.css"
                  //    "~/Content/Account/dataTables.bootstrap.css",
                 //    "~/Content/Account/select2.css"
                     ));


            // Admin Layout JS
            bundles.Add(new ScriptBundle("~/Scripts/Admin").Include(
                       "~/Scripts/Account/jquery-1.11.0.min.js",
                       "~/Scripts/Account/jquery-migrate-1.2.1.min.js",
                       "~/Scripts/Account/jquery-ui-1.10.3.custom.min.js",
                       "~/Scripts/Account/bootstrap.min.js",
                       "~/Scripts/Account/bootstrap-hover-dropdown.min.js",
                       "~/Scripts/Account/jquery.slimscroll.min.js",
                       "~/Scripts/Account/jquery.blockui.min.js",
                       "~/Scripts/Account/jquery.cokie.min.js",
                       "~/Scripts/Account/jquery.uniform.min.js",
                       "~/Scripts/Account/bootstrap-switch.min.js",
                       "~/Scripts/Dashboard/jquery.vmap.js",
                       "~/Scripts/Dashboard/jquery.vmap.russia.js",
                       "~/Scripts/Dashboard/jquery.vmap.world.js",
                       "~/Scripts/Dashboard/jquery.vmap.europe.js",
                       "~/Scripts/Dashboard/jquery.vmap.germany.js",
                       "~/Scripts/Dashboard/jquery.vmap.usa.js",
                       "~/Scripts/Dashboard/jquery.vmap.sampledata.js",
                       "~/Scripts/Dashboard/jquery.flot.min.js",
                       "~/Scripts/Dashboard/jquery.flot.resize.min.js",
                       "~/Scripts/Dashboard/jquery.flot.categories.min.js",
                       "~/Scripts/Dashboard/jquery.pulsate.min.js",
                       "~/Scripts/Account/quick-sidebar.js",
                       "~/Scripts/Dashboard/moment.min.js",
                        "~/Scripts/Dashboard/daterangepicker.js",
                       "~/Scripts/Dashboard/fullcalendar.min.js",
                       "~/Scripts/Dashboard/jquery.easypiechart.min.js",
                       "~/Scripts/Dashboard/jquery.sparkline.min.js",
                       "~/Scripts/Dashboard/jquery.gritter.js",
                       "~/Scripts/Account/metronic.js",
                       "~/Scripts/Account/layout.js",
                       "~/Scripts/Account/demo.js",
                       "~/Scripts/Dashboard/index.js",
                 //      "~/Scripts/Dashboard/jquery.dataTables.min.js",
                 //      "~/Scripts/Dashboard/select2.min.js",
                       "~/Scripts/Dashboard/tasks.js",
                //                              "~/Scripts/Dashboard/dataTables.bootstrap.js",

                       "~/Scripts/toastr.js",
                         "~/Scripts/knockout-3.1.0.js",
                       "~/Scripts/knockout.mapping-latest.js",
                       "~/Scripts/knockout.validation.js",
                        "~/Scripts/underscore.js",
                       "~/Scripts/underscore-ko-1.6.0.js",
                       "~/Scripts/require.js",
                          "~/Scripts/amplify.js",
                        "~/Scripts/moment.js",
                       "~/Scripts/respond.min.js",
                         "~/Scripts/owl.carousel.min.js",
                       "~/Scripts/respond.js"
                       )   );

        }
    }
}
