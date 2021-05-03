import {NavbarR,NavbarBg,NavbarIconColor,IconColor,onScrollBg,
    NavHoverColor,HomeIconText,ArticleIconText,AboutIconText,ContactIconText,NavbarIconText,TabPointer,OpenEditor,
    UsernameP,ProfilePicture,DescribeP,AddressP,DescribeFontP,AddressFontP,UsernameFontP,ButtonStyleP,DButtonColorP,
    HButtonColorP,HTextColorP,DTextColorP,dpStructureP,layoutp,alignp,profileSectionBackground,encryptBackgroundWords,
	profileSectionBackgroundColor,AvatarCrop,openbackgroundp,namee,descriptione,card1edu,educationsectiontitle,
    currenttabe,educationhfontname,educationpfontname,fontcolore,fontcolorep,animationtypeeh,animationtimeeh,
    animationdelayeh,carddetailse,editcardine,fontsineb,fontfamilyedu,imagetypeedu,newimageinedu,layoutinedu,shadowcardedu, 
	aboutSectionBackground,
	AboutSectionImageUploader,

} from './reducers';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

let red = combineReducers({
	Navbar: NavbarR,
	NavbarBg: NavbarBg,
	NavbarIconColor: NavbarIconColor,
	IconColor: IconColor,
	onScrollBg: onScrollBg,
	NavHoverColor: NavHoverColor,
	HomeIconText: HomeIconText,
	ArticleIconText,
	AboutIconText,
	ContactIconText,
	NavbarIconText,
	profileSectionBackground: profileSectionBackground,
	encryptBackgroundWords: encryptBackgroundWords,
	profileSectionBackgroundColor: profileSectionBackgroundColor,
	AvatarCrop: AvatarCrop,
	aboutSectionBackground,
	TabPointer,
	OpenEditor,
	ProfilePicture,
	UsernameP,
	DescribeP,
	AddressP,
	DescribeFontP,
	AddressFontP,
	UsernameFontP,
	ButtonStyleP,
	DButtonColorP,
	HButtonColorP,
	HTextColorP,
	DTextColorP,
	dpStructureP,
	layoutp,
	alignp,
	openbackgroundp,
	AboutSectionImageUploader,
    namee,
    descriptione,
    card1edu,
    educationsectiontitle,
    currenttabe,
    educationhfontname,
    educationpfontname,
    fontcolore,
    fontcolorep,
    animationtypeeh,
    animationtimeeh,
    animationdelayeh,
    carddetailse,
    fontsineb,
    fontfamilyedu,
    editcardine,
    imagetypeedu,
    newimageinedu,
    layoutinedu,
    shadowcardedu
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(red, composeEnhancers(applyMiddleware(logger)));
export default Store;
