const WhoToFollowListItem = (who, size) => {
    if (size === "lg") {
        return(`
          <li class="list-group-item">
          <img src=${who.avatarIcon} class="rounded-pill">
          <label class="h6 ps-2">${who.userName} <i class="fas fa-circle"></i>
          <br>
          <label>${who.handle}</label>
          </label>
          <button class="btn btn-primary btn-sm rounded-pill float-end">Follow</button>
          </li>
    `);
    }
    else {
        return(`
          <li class="list-group-item">
          <img src=${who.avatarIcon} class="rounded-pill">
          <label class="h6 ps-2">${who.userName} <i class="fas fa-circle"></i>
          <br>
          <label>${who.handle}</label>
          </label>
          <button class="btn btn-primary rounded-pill float-end">Follow</button>
          </li>
    `);
    }
}
export default WhoToFollowListItem;
