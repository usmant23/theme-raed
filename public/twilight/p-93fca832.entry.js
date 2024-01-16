/*!
 * Crafted with ❤ by Salla
 */
import{r as t,h as i,g as s}from"./p-e72c32ba.js";import{H as n}from"./p-4be9ecb6.js";import{a}from"./p-0b796197.js";const e="";const o=class{constructor(i){t(this,i);this.loadMoreText=undefined;this.itemPerPage=10;this.notifications=[];this.pagination=undefined;this.hasInfiniteScroll=undefined;this.total=undefined;this.showPlaceholder=undefined;this.nextPage=undefined;this.no_notifications_trans=salla.lang.get("blocks.header.no_notifications");this.load_more_text_trans=salla.lang.get("common.elements.load_more");salla.lang.onLoaded((()=>{this.no_notifications_trans=salla.lang.get("blocks.header.no_notifications");this.load_more_text_trans=salla.lang.get("common.elements.load_more")}))}loading(t=true){var i;let s=(i=this.status)===null||i===void 0?void 0:i.querySelector(".s-button-text");if(s){n.toggleElementClassIf(s,"s-button-hide","s-button-show",(()=>t));this.btnLoader.style.display=t?"inherit":"none"}}getNotificationCard(t){const i=document.createElement("salla-notification-item");i.notification=t;i.classList.add("s-block");return i}render(){var t;if(this.showPlaceholder){return i("div",{class:"s-notifications-no-content"},i("salla-placeholder",{alignment:"center"},i("span",{slot:"title"},this.no_notifications_trans)))}return i("div",{class:"s-notifications-wrapper"},i("div",{class:"s-notifications-container",ref:t=>this.wrapper=t}),this.hasInfiniteScroll&&i("div",{class:"s-infinite-scroll-wrapper",ref:t=>this.status=t},i("button",{onClick:()=>this.loadMore(),class:"s-infinite-scroll-btn s-button-btn s-button-primary"},i("span",{class:"s-button-text s-infinite-scroll-btn-text"},(t=this.loadMoreText)!==null&&t!==void 0?t:this.load_more_text_trans),i("span",{class:"s-button-loader s-button-loader-center s-infinite-scroll-btn-loader",ref:t=>this.btnLoader=t,style:{display:"none"}}))))}handleResponse(t){return t.map((t=>this.getNotificationCard(t)))}initiateInfiniteScroll(){var t,i,s;if(!this.wrapper){salla.logger.error("Wrapper is undefined. Cannot initiate infinite scroll.");return}this.infiniteScroll=salla.infiniteScroll.initiate(this.wrapper,this.wrapper,{path:()=>this.nextPage,history:true,nextPage:this.nextPage,scrollThreshold:false,status:this.status,button:this.status.querySelector(".s-infinite-scroll-btn")},true);(t=this.infiniteScroll)===null||t===void 0?void 0:t.on("request",(t=>{this.loading()}));(i=this.infiniteScroll)===null||i===void 0?void 0:i.on("load",(t=>{var i;this.loading(false);this.pagination=t.pagination;this.nextPage=((i=t.pagination.links)===null||i===void 0?void 0:i.next)||null;this.handleResponse(t.data);let s=this.host.querySelectorAll("salla-notification-item:not(.animated)");this.animateItems(s)}));(s=this.infiniteScroll)===null||s===void 0?void 0:s.on("error",(t=>{salla.logger.error("Error loading more comments:",t)}))}animateItems(t){a({targets:t,opacity:[0,1],duration:1200,translateY:[20,0],delay:function(t,i){return i*100},easing:"easeOutExpo",complete:function(i){t.forEach((t=>{t.classList.add("animated")}))}})}async loadInitialData(){await salla.api.notifications.fetch({per_page:this.itemPerPage}).then((t=>{var i;this.notifications=t.data;this.hasInfiniteScroll=!!t.pagination.links.next;this.pagination=t.pagination;this.total=t.pagination.total;this.nextPage=((i=t.pagination.links)===null||i===void 0?void 0:i.next)||null;setTimeout((()=>{this.handleResponse(t.data).forEach((t=>this.wrapper.append(t)));this.initiateInfiniteScroll();let i=this.wrapper.querySelectorAll("salla-notification-item:not(.animated)");this.animateItems(i)}),100)})).catch((t=>{salla.logger.error(t);this.showPlaceholder=true;this.loading(false)}))}async loadMore(){var t;(t=this.infiniteScroll)===null||t===void 0?void 0:t.loadNextPage()}async componentWillLoad(){await this.loadInitialData()}get host(){return s(this)}};o.style=e;export{o as salla_notifications};
//# sourceMappingURL=p-93fca832.entry.js.map