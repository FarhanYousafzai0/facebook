import { GoHomeFill } from "react-icons/go";
import { FaUserFriends, FaVideo, FaGamepad } from "react-icons/fa";




const nav_data = [

    {
id:1,
title:"Home",
icon: <GoHomeFill />,
path: "/home",

    },{
    id:2,
title:"Friends",
icon: <FaUserFriends />,
path: "/friends",

    },
    {
    id:3,
title:"Video",
icon: <FaVideo />,
path: "/video",

    },{
    id:4,
title:"Games",
icon: <FaGamepad />,
path: "/game",

    },{
    id:5,
title:"Groups",
icon: <FaUserFriends />,

path: "/groups",

    },
]


export default nav_data;