import HomeComponent from "./homecomponent.js";
import navigationsidebar from "../ExploreScreen/navigationsidebar.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-home').append(`
        <div class="d-none d-xxl-block">
            <div class="row mt-2">
                <div class="col-2">
                    ${navigationsidebar("home", "xl")}
                </div>
                <div class="col-6">
                    ${HomeComponent("xl")}
                </div>
                <div class="col-4">
                   ${PostSummaryList()}
                </div>
            </div>
        </div>
        <div class="d-none d-xl-block d-xxl-none">
            <div class="row mt-2">
                <div class="col-2">
                    ${navigationsidebar("home", "xl")}
                </div>
                <div class="col-6">
                    ${HomeComponent("xl")}
                </div>
                <div class="col-4">
                   ${PostSummaryList()}
                </div>
            </div>
        </div>
        <div class="d-none d-lg-block d-xl-none">
            <div class="row mt-2">
                <div class="col-1">
                    ${navigationsidebar("home", "lg")}
                </div>
                <div class="col-7">
                    ${HomeComponent("lg")}
                </div>
                <div class="col-4">
                   ${PostSummaryList()}
                </div>
            </div>
        </div>
        <div class="d-none d-md-block d-lg-none">
            <div class="row mt-2">
                <div class="col-2">
                    ${navigationsidebar("home", "md")}
                </div>
                <div class="col-10">
                    ${HomeComponent("md")}
                </div>
            </div>
        </div>
        <div class="d-none d-sm-block d-md-none">
            <div class="row mt-2">
                <div class="col-2">
                    ${navigationsidebar("home", "md")}
                </div>
                <div class="col-10">
                    ${HomeComponent("sm")}
                </div>
            </div>
        </div>
        <div class="d-block d-sm-none">
            <div class="row mt-2">
                <div class="col-2">
                    ${navigationsidebar("home", "md")}
                </div>
                <div class="col-10">
                    ${HomeComponent("xs")}
                </div>
            </div>
        </div>
    `);
})($);
