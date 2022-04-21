import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <div class="d-none d-xxl-block">
                <ul class="list-group">
                    <li class="list-group-item"><label class="h6">Who to Follow</label></li>
                    ${
                        who.map(item => {
                            return(WhoToFollowListItem(item, "xxl"));
                        }).join('')
                    }
                </ul>
            </div>
            <div class="d-none d-xl-block d-xxl-none">
            <ul class="list-group">
                <li class="list-group-item"><label class="h6">Who to Follow</label></li>
                ${
                    who.map(item => {
                        return(WhoToFollowListItem(item, "xxl"));
                    }).join('')
                }
            </ul>
        </div>
            <div class="d-none d-lg-block d-xl-none">
                <ul class="list-group">
                    <li class="list-group-item"><label class="h6">Who to Follow</label></li>
                    ${
                        who.map(item => {
                            return(WhoToFollowListItem(item, "lg"));
                        }).join('')
                    }
                </ul>
            </div>
            <div class="d-none d-md-block d-lg-none">
                <ul class="list-group">
                        <li class="list-group-item"><label class="h6">Who to Follow</label></li>
                        ${
            who.map(item => {
                return(WhoToFollowListItem(item, "md"));
            }).join('')
        }
                    </ul>
            </div>
            <div class="d-none d-sm-block d-md-none">
                <ul class="list-group">
                    <li class="list-group-item"><label class="h6">Who to Follow</label></li>
                    ${
        who.map(item => {
            return(WhoToFollowListItem(item, "sm"));
        }).join('')
    }
                </ul>
            </div>
            <div class="d-block d-sm-none">
                <ul class="list-group">
                    <li class="list-group-item"><label class="h6">Who to Follow</label></li>
                    ${
        who.map(item => {
            return(WhoToFollowListItem(item, "xs"));
        }).join('')
    }
                </ul>
            </div>
            
`); }

export default WhoToFollowList;
