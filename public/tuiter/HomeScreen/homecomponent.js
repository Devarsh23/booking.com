import PostList from "../PostList/index.js"

const HomeComponent = (size) => {
    return(`
        ${PostList(size)}
    `);
}
export default HomeComponent;

