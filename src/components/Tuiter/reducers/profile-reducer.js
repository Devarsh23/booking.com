import profile from "../data/profile.json";

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case 'update-profile':
            return state.map(p => {
                p.name = action.profile.name;
                p.bio = action.profile.bio;
                p.location = action.profile.location;
                p.website = action.profile.website;
                p.dateOfBirth = action.profile.dateOfBirth;
                return p
            });
        default:
            return profile;
    }
}

export default profileReducer;
