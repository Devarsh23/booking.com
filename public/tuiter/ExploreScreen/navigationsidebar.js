const navigationsidebar = (activeParam, size) => {
    if (activeParam === "explore" && size === "lg") {
        return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item" href="../HomeScreen/home.html">
                    <i class="fa fa-home"></i>
                </a>
                <a class="list-group-item active" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bell"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-envelope"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bookmark"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-list"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-user"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-circle"></i>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            <script>
                $(function(){
                  $('body').on('click', '.list-group-item', function(){
                    $('.list-group .list-group-item').removeClass('active');
                    $(this).closest('.list-group-item').addClass('active');
                  })
                });
            </script>
    `);
    }
    else if(activeParam === "explore" && size === "xl") {
        return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item" href="../HomeScreen/home.html">
                    <i class="fa fa-home"></i> Home
                </a>
                <a class="list-group-item active" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i> Explore
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bell"></i> Notifications
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-envelope"></i> Messages
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bookmark"></i> Bookmarks
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-list"></i> Lists
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-user"></i> Profile
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-circle"></i> More
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            <script>
                $(function(){
                  $('body').on('click', '.list-group-item', function(){
                    $('.list-group .list-group-item').removeClass('active');
                    $(this).closest('.list-group-item').addClass('active');
                  })
                });
            </script>
    `);
    }
    else if (activeParam === "explore" && size === "md") {
        return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item" href="../HomeScreen/home.html">
                    <i class="fa fa-home"></i>
                </a>
                <a class="list-group-item active" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bell"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-envelope"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bookmark"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-list"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-user"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-circle"></i>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            <script>
                $(function(){
                  $('body').on('click', '.list-group-item', function(){
                    $('.list-group .list-group-item').removeClass('active');
                    $(this).closest('.list-group-item').addClass('active');
                  })
                });
            </script>
    `);
    }
    else if (activeParam === "home" && size === "lg") {
        return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item active" href="../HomeScreen/home.html">
                    <i class="fa fa-home"></i>
                </a>
                <a class="list-group-item" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bell"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-envelope"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bookmark"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-list"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-user"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-circle"></i>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            <script>
                $(function(){
                  $('body').on('click', '.list-group-item', function(){
                    $('.list-group .list-group-item').removeClass('active');
                    $(this).closest('.list-group-item').addClass('active');
                  })
                });
            </script>
    `);
    }
    else if(activeParam === "home" && size === "xl") {
        return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item active" href="../HomeScreen/home.html">
                    <i class="fa fa-home"></i> Home
                </a>
                <a class="list-group-item" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i> Explore
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bell"></i> Notifications
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-envelope"></i> Messages
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bookmark"></i> Messages
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-list"></i> Lists
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-user"></i> Profile
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-circle"></i> More
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            <script>
                $(function(){
                  $('body').on('click', '.list-group-item', function(){
                    $('.list-group .list-group-item').removeClass('active');
                    $(this).closest('.list-group-item').addClass('active');
                  })
                });
            </script>
    `);
    }
    else if (activeParam === "home" && size === "md") {
        return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item active" href="../HomeScreen/home.html">
                    <i class="fa fa-home"></i>
                </a>
                <a class="list-group-item" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bell"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-envelope"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bookmark"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-list"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-user"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-circle"></i>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            <script>
                $(function(){
                  $('body').on('click', '.list-group-item', function(){
                    $('.list-group .list-group-item').removeClass('active');
                    $(this).closest('.list-group-item').addClass('active');
                  })
                });
            </script>
    `);
    }
    else {
        return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item active" href="../HomeScreen/home.html">
                    <i class="fa fa-home"></i> Home
                </a>
                <a class="list-group-item" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i> Explore
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bell"></i> Notifications
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-envelope"></i> Messages
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bookmark"></i> Bookmarks
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-list"></i> Lists
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-user"></i> Profile
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-circle"></i> More
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            <script>
                $(function(){
                  $('body').on('click', '.list-group-item', function(){
                    $('.list-group .list-group-item').removeClass('active');
                    $(this).closest('.list-group-item').addClass('active');
                  })
                });
            </script>
    `);
    }
}
export default navigationsidebar;
