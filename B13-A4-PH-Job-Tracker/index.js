let currentTab = "all";


const tabActive = ["bg-[#002C5C]", "text-white"]; 
const tabInactive = ["bg-white", ];

const allContainer = document.getElementById("all-container")
const interviewContainer = document.getElementById("interview-container")
const rejectedContainer = document.getElementById("rejected-container")
const emptyState = document.getElementById("empty-state");

function switchTab(tab) {
    
    const selectedTab = tab.toLowerCase(); 
  
    const tabs = ["all", "interview", "rejected"];

   for (const t of tabs) {
        const tabElement = document.getElementById("tab-" + t);
        
        if (tabElement) {
            if (t === selectedTab) {
               
                tabElement.classList.add(...tabActive);
                tabElement.classList.remove(...tabInactive);
             } else {
               
                 tabElement.classList.add(...tabInactive);
                 tabElement.classList.remove(...tabActive);
             }
        }
    }
    const pages = [allContainer,interviewContainer,rejectedContainer];
    for ( const section of pages){
        section.classList.add("hidden");
    };
    

emptyState.classList.add("hidden");
    emptyState.parentElement.classList.add("hidden");

   if (tab === "all"){
    allContainer.classList.remove("hidden");
   

    if (allContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
            emptyState.parentElement.classList.remove("hidden"); 
        }
    
   
       
        
   }
   else if( tab=== "interview") {
    interviewContainer.classList.remove("hidden")
    if(interviewContainer.children.length < 1){
         emptyState.classList.remove("hidden");
            emptyState.parentElement.classList.remove("hidden")
    }

   }
   else{
    rejectedContainer.classList.remove("hidden")
    if(rejectedContainer.children.length < 1){
         emptyState.classList.remove("hidden");
            emptyState.parentElement.classList.remove("hidden")
    }
   }
}

//stat update
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectedStat = document.getElementById("stat-rejected");



totalStat.innerText = allContainer.children.length;

switchTab(currentTab);


document.getElementById("jobs-container").addEventListener("click", function(event) {
    const clickedElement = event.target;
 const card = clickedElement.closest(".card")
 const parent = card.parentNode;
 const status = card.querySelector(".status");

    
    if (clickedElement.classList.contains("interview")) {
        status.innerText = "Interview"
        interviewContainer.appendChild(card)
        updateStat()
        switchTab(currentTab)
    }

    
    if (clickedElement.classList.contains("rejected")) {
         status.innerText = "Rejected"
      rejectedContainer.appendChild(card)
      updateStat()
      switchTab(currentTab)
    }

    
    if (clickedElement.classList.contains("delete")) {
      parent.removeChild(card)
      updateStat()
      switchTab(currentTab)
    }
});


function updateStat(){
    totalStat.innerText = allContainer.children.length
        interviewStat.innerText = interviewContainer.children.length
            rejectedStat.innerText = rejectedContainer.children.length

}
