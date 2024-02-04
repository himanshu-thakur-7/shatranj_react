export default function HomeScreenWidget(props: { title: string, image: string }) {

    const renderWidget = () => {
        if (props.image != "")
            return <div className="text-white text-xl font-bold">
                {props.title}
                <img src={props.image} alt="" height={80} width={80} className="mt-5 ml-auto mr-auto" />
            </div>
        else {
            return <div className="text-white text-4xl font-bold">
                {props.title}
            </div>
        }
    }

    return renderWidget();
}