import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = (size) => {
    if (size === "sm") {
        return(`
           <div class="row">
                <div class="form-group wd-search mb-1">
                    <div class="input-group ps-1 pe-1">
                        <span class="fa fa-search ps-3 form-control-feedback" style="color:#657786; padding-top: 10px"></span>
                        <input type="text" class="form-control rounded-pill small wd-bg-color-black-twitter border-0" placeholder="Search Tuiter">
                        <span class="fa fa-cog wd-cogsize fa-inverse ps-2 pt-1" style="color:#2a9fd6"></span>
                    </div>
                </div>
           </div>
           <ul class="nav mb-1 nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#"><label>For you</label></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><label>Trending</label></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><label>News</label></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1"><label>Sports</label></a>
                    </li>
                </ul>
           </ul>
           <div class="position-relative">
                <img src="../images/starship.jpeg" class="card-img rounded-0" width="100%">
                <div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <h1 class="card-title wd-fg-color-white bottom-50" >SpaceX's Starship</h1>
                </div>
           </div>
           ${PostSummaryList()}
    `);
    }
    if (size === "xs") {
        return(`
           <div class="row">
                <div class="form-group wd-search mb-1">
                    <div class="input-group ps-1 pe-1">
                        <span class="fa fa-search ps-3 form-control-feedback" style="color:#657786; padding-top: 10px"></span>
                        <input type="text" class="form-control rounded-pill small wd-bg-color-black-twitter border-0" placeholder="Search Tuiter">
                        <span class="fa fa-cog wd-cogsize fa-inverse ps-2 pt-1" style="color:#2a9fd6"></span>
                    </div>
                </div>
           </div>
           <ul class="nav mb-1 nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#"><label>For you</label></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><label>Trending</label></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1"><label>News</label></a>
                    </li>
                </ul>
           </ul>
           <div class="position-relative">
                <img src="../images/starship.jpeg" class="card-img rounded-0" width="100%">
                <div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <h1 class="card-title wd-fg-color-white bottom-50" >SpaceX's Starship</h1>
                </div>
           </div>
           ${PostSummaryList()}
    `);
    }
    else {
        return(`
           <div class="row">
                <div class="form-group wd-search mb-1">
                    <div class="input-group ps-1 pe-1">
                        <span class="fa fa-search ps-3 form-control-feedback" style="color:#657786; padding-top: 10px"></span>
                        <input type="text" class="form-control rounded-pill small wd-bg-color-black-twitter border-0" placeholder="Search Tuiter">
                        <span class="fa fa-cog wd-cogsize fa-inverse ps-2 pt-1" style="color:#2a9fd6"></span>
                    </div>
                </div>
           </div>
           <ul class="nav mb-1 nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#"><label>For you</label></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><label>Trending</label></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><label>News</label></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><label>Sports</label></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1"><label>Entertainment</label></a>
                    </li>
                </ul>
           </ul>
           <div class="position-relative">
                <img src="../images/starship.jpeg" class="card-img rounded-0" width="100%">
                <div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <h1 class="card-title wd-fg-color-white bottom-50" >SpaceX's Starship</h1>
                </div>
           </div>
           ${PostSummaryList()}
    `);
    }
}
export default ExploreComponent;

