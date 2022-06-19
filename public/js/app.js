


const page_title = document.title;

//This depends on the title of the user listing page to be "User Listing"
if(page_title.includes("User Listing"))
{
    const user_listing_main = (()=>{
    
        const userListNode = document.querySelector("#user_list");
        

        userListNode.addEventListener("click",(evt)=>{
    
            const selectedElement = evt.target; // 
    
            if(selectedElement.tagName === "BUTTON" && selectedElement.innerHTML.includes("Delete"))
            {
                const result = confirm("You are about to delete a user,press okay to continue")
    
    
                /// if user clicks cancel
                if(!result)
                {     
                    evt.preventDefault();
                }
            }
    
      
    
    
        })
    
    
    
    
    })();
}


if(page_title.includes("hgfhdfkhfd"))
{

}