import TrackButton from "./sidebarComponents/TrackButton";
import ArtistButton from "./sidebarComponents/ArtistButton";
import FeaturedButton from "./sidebarComponents/FeaturedButton";

export default function LeftSidebar() {
    return (
        <div className="col-span-1">

            <p>Featured</p>

            {/* Your Collection, Charts */}

            <FeaturedButton></FeaturedButton>
            <FeaturedButton></FeaturedButton>

            <p>Recent Tracks</p>

            {/* 5-10 most recently listened to tracks, void if they haven't recently listened to anyone */}

            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>

            <p>Recent Artists</p>

            {/* 5 most recently listened to artists */}

            <ArtistButton></ArtistButton>
            <ArtistButton></ArtistButton>
            <ArtistButton></ArtistButton>
            <ArtistButton></ArtistButton>
            <ArtistButton></ArtistButton>

        </div>
    );
}