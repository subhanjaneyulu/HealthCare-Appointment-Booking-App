import {ListItem,TabButton} from "./styledComponents"

const SideBar = props => {
    const{tabDetails,clickTabItem,isActive} = props
    const {tabId,displayText} = tabDetails 
    const onClickTabItem = () => {
        clickTabItem(tabId)
    }

    return (
        <ListItem>
            <TabButton
             type = "button"
             onClick={onClickTabItem}
             isActive={isActive}
            >
                {displayText}
            </TabButton>
        </ListItem>
    )

}
export default SideBar;