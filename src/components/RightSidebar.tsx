import TrackButton from "./sidebarComponents/TrackButton";

export default function RightSidebar() {
    return (
        <div className="col-span-1">
            <p>Next up</p>

            {/* Queue & some autoplay parts */}
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
            <TrackButton></TrackButton>
        </div>
    );
}