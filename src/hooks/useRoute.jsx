import { BookmarksIcon, ExploreIcon, HomeIcon, ListIcon, MessagesIcon, MoreIcon, NotificationIcon, ProfileIcon } from "../assets/icons"
import {PATH} from "../hooks/usePath"
import {Home, Notification, Messages, Bookmarks, Lists, Explore, Profile, More} from "../pages/Dashboard"
import {Tweets, TweetsReplies, Media, Likes} from "../pages/Dashboard/ProfilePages"
import { Login, Register } from "../pages/Login"

export const dashboardRouteList = [
    {
        id:1,
        path:PATH.home,
        element:<Home/>,
        children:[]
    },
    {
        id:2,
        path:PATH.explore,
        element:<Explore/>,
        children:[]
    },
    {
        id:3,
        path:PATH.notification,
        element:<Notification/>,
        children:[]
    },
    {
        id:4,
        path:PATH.messages,
        element:<Messages/>,
        children:[]
    },
    {
        id:5,
        path:PATH.bookmarks,
        element:<Bookmarks/>,
        children:[]
    },
    {
        id:6,
        path:PATH.lists,
        element:<Lists/>,
        children:[]
    },
    {
        id:7,
        path:PATH.profile,
        element:<Profile/>,
        children:[
            {
                id:9,
                path:PATH.profileTweets,
                element:<Tweets/>,
                children:[]  
            },
            {
                id:10,
                path:PATH.profileTweetsReplies,
                element:<TweetsReplies/>,
                children:[]  
            },
            {
                id:11,
                path:PATH.profileMedia,
                element:<Media/>,
                children:[]  
            },
            {
                id:12,
                path:PATH.profileLikes,
                element:<Likes/>,
                children:[]  
            },
        ]
    },
    {
        id:8,
        path:PATH.more,
        element:<More/>,
        children:[]
    },
]

export const loginRoutes = [
    {
      id:1,
      path:PATH.home,
      element:<Login/>,
      children:[]
   },
    {
      id:2,
      path:PATH.register,
      element:<Register/>,
      children:[]
   },
]

export const navbarList = [
    {
        id:1,
        title:"Home",
        path:PATH.home,
        icon:<HomeIcon active={false}/>,
        activeIcon:<HomeIcon active={true}/>
    },
    {
        id:2,
        title:"Explore",
        path:PATH.explore,
        icon:<ExploreIcon active={false}/>,
        activeIcon:<ExploreIcon active={true}/>,
    },
    {
        id:3,
        title:"Notifications",
        path:PATH.notification,
        icon:<NotificationIcon active={false}/>,
        activeIcon:<NotificationIcon active={true}/>,
    },
    {
        id:4,
        title:"Messages",
        path:PATH.messages,
        icon:<MessagesIcon active={false}/>,
        activeIcon:<MessagesIcon active={true}/>,
    },
    {
        id:5,
        title:"Bookmarks",
        path:PATH.bookmarks,
        icon:<BookmarksIcon active={false}/>,
        activeIcon:<BookmarksIcon active={true}/>,
    },
    {
        id:6,
        title:"Lists",
        path:PATH.lists,
        icon:<ListIcon active={false}/>,
        activeIcon:<ListIcon active={true}/>,
    },
    {
        id:7,
        title:"Profile",
        path:PATH.profile,
        icon:<ProfileIcon active={false}/>,
        activeIcon:<ProfileIcon active={true}/>,
    },
    {
        id:8,
        title:"More",
        path:PATH.more,
        icon:<MoreIcon active={false}/>,
        activeIcon:<MoreIcon active={true}/>,
    },
]