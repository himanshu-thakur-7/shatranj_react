import HomeScreenWidget from "./HomeScreenWidget";

export default function HomeWrapper() {
    return <div className=" h-full grid grid-cols-2 gap-3 relative">
        <div className="col-span-2 bg-custom-yellow  p-4 h-80 m-2 rounded-xl" >
            <HomeScreenWidget title={`Let's become a chess master`} image={""} />
        </div>
        <div className="bg-custom-purple p-4 h-52 ml-1 mr-1 rounded-xl">
            <HomeScreenWidget title={"Play vs Robot"} image={"/images/play_ai.png"} />
        </div>
        <div className="bg-custom-yellow p-4 h-52 ml-1 mr-1 rounded-xl">
            <HomeScreenWidget title={"Stats"} image={"/images/stats.png"} />
        </div>

        <div className="col-span-1 bg-custom-green p-4 h-52 ml-1 mr-1 rounded-xl">
            <HomeScreenWidget title={"Play vs Friend"} image={"/images/play_friend.png"} />
        </div>
        <div className="col-span-1 bg-custom-purple p-4 h-52 ml-1 mr-1 rounded-xl" >
            <HomeScreenWidget title={"Chess Lessons"} image={"/images/learnChess.svg"} />
        </div>
        <img
            src="/images/main_pic.png"
            alt="Overlay Image"
            className="absolute bottom-auto -right-12 left-100 top-6 z-2 w-96 h-96 object-cover"
        />
    </div>
}