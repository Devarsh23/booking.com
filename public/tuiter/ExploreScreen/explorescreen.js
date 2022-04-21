import navigationsidebar from "./navigationsidebar.js";
import ExploreComponent from "./explorecomponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
(function ($) {
$('#wd-explore').append(`
        <div class="d-none d-xxl-block">
            <div class="row mt-2">
                <div class="col-2">
                    ${navigationsidebar("explore", "xl")}
                </div>
                <div class="col-6">
                    ${ExploreComponent()}
                </div>
                <div class="col-4">
                   ${WhoToFollowList()}
                </div>
            </div>
        </div>
        <div class="d-none d-xl-block d-xxl-none">
            <div class="row mt-2">
                <div class="col-2">
                    ${navigationsidebar("explore", "xl")}
                </div>
                <div class="col-6">
                    ${ExploreComponent()}
                </div>
                <div class="col-4">
                   ${WhoToFollowList()}
                </div>
            </div>
        </div>
        <div class="d-none d-lg-block d-xl-none">
            <div class="row mt-2">
                <div class="col-1">
                    ${navigationsidebar("explore", "lg")}
                </div>
                <div class="col-7">
                    ${ExploreComponent()}
                </div>
                <div class="col-4">
                   ${WhoToFollowList()}
                </div>
            </div>
        </div>
        <div class="d-none d-md-block d-lg-none">
            <div class="row mt-2">
                <div class="col-2">
                    ${navigationsidebar("explore", "md")}
                </div>
                <div class="col-10">
                    ${ExploreComponent()}
                </div>
            </div>
        </div>
        <div class="d-none d-sm-block d-md-none">
            <div class="row mt-2">
                <div class="col-2">
                    ${navigationsidebar("explore", "md")}
                </div>
                <div class="col-10">
                    ${ExploreComponent("sm")}
                </div>
            </div>
        </div>
        <div class="d-block d-sm-none">
            <div class="row mt-2">
                <div class="col-2">
                    ${navigationsidebar("explore", "md")}
                </div>
                <div class="col-10">
                    ${ExploreComponent("xs")}
                </div>
            </div>
        </div>
        
    `);
    // <div className="col-2 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
    // <div className="d-xs-none d-sm-none d-md-none d-lg-block col-lg-7 col-xl-6">
    // <div className="col-xs-none d-sm-none d-md-none d-lg-block col-lg-none col-xl-4">
})($);
