(()=>{"use strict";new Set,window.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=document.querySelectorAll(".left-content a"),t=document.querySelector(".content");for(let o=0;o<e.length;o+=1)e[o].id===t.classList[1]&&e[o].classList.replace("nav-inactive","nav-active")})(),[".showcase",".home-menu",".intro",".fixed-bg1-text"].forEach((e=>{((e,t,o,n,c)=>{const r=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&document.querySelectorAll(o).forEach((e=>{e.classList.replace("fadeOut","fadeIn")}))}))}),{threshold:.3});document.querySelectorAll(e).forEach((e=>r.observe(e)))})(e,0,e)}))})),window.onscroll=()=>{const e=document.querySelector(".sticky-navbar");document.body.scrollTop>25||document.documentElement.scrollTop>25?e.style.top="0":e.style.top="-180px"},document.body.addEventListener("click",(e=>{const t=document.querySelector(".sidebar.menu");(e.target.matches(".sidebar.symbol")||e.target.matches(".menu-icon")||e.target.matches(".menu-text"))&&(t.style.transform="translate3d(0, 0, 0)"),e.target.matches(".closeBtn")&&(t.style.transform="translate3d(-450px, 0, 0)")}));const e=document.querySelector("#pre-loader");window.onload=()=>{e.style.display="none"}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaG9tZS41YTM2Nzk0OS5qcyIsIm1hcHBpbmdzIjoibUJBeUplLElBQUlBLElDdEpuQkMsT0FBT0MsaUJBQWlCLG9CQUFvQixLRDRReEIsTUFDaEIsTUFBTUMsRUFBYUMsU0FBU0MsaUJBQWlCLG1CQUN2Q0MsRUFBaUJGLFNBQVNHLGNBQWMsWUFDOUMsSUFBSyxJQUFJQyxFQUFJLEVBQUdBLEVBQUlMLEVBQVdNLE9BQVFELEdBQUssRUFDcENMLEVBQVdLLEdBQUdFLEtBQU9KLEVBQWVLLFVBQVUsSUFDOUNSLEVBQVdLLEdBQUdHLFVBQVVDLFFBQVEsZUFBZ0IsYUFFeEQsRUNsUkFDLEdBRUEsQ0FBQyxZQUFhLGFBQWMsU0FBVSxtQkFBbUJDLFNBQVNDLElEaUg1QyxFQUFDQyxFQUFZQyxFQUFPQyxFQUFlQyxFQUFTQyxLQUNsRSxNQVdNQyxFQUFXLElBQUlDLHNCQVhKLENBQUNDLEVBQVNGLEtBQ3ZCRSxFQUFRVCxTQUFRVSxJQUNSQSxFQUFNQyxnQkFDY3JCLFNBQVNDLGlCQUFpQmEsR0FDbENKLFNBQVNZLElBQ2pCQSxFQUFTZixVQUFVQyxRQ3RIa0IsVUFBVyxTRHNITixHQUdsRCxHQUNILEdBRStDLENBQUVlLFVDNUhuQixLRDZIZnZCLFNBQVNDLGlCQUFpQlcsR0FDbENGLFNBQVFjLEdBQVVQLEVBQVNRLFFBQVFELElBQU8sRUM5SGxERSxDQUFrQmYsRUFBYSxFQUFLQSxFQUFnQyxHQUN2RSxJQUdMZCxPQUFPOEIsU0QwUFcsS0FDZCxNQUFNQyxFQUFTNUIsU0FBU0csY0FBYyxrQkFDbENILFNBQVM2QixLQUFLQyxVQUFZLElBQU05QixTQUFTK0IsZ0JBQWdCRCxVQUFZLEdBRXJFRixFQUFPSSxNQUFNQyxJQUFNLElBRW5CTCxFQUFPSSxNQUFNQyxJQUFNLFFBQ3ZCLEVDL1BKakMsU0FBUzZCLEtBQUsvQixpQkFBaUIsU0FBVW9DLElBQ3JDLE1BQU1DLEVBQWlCbkMsU0FBU0csY0FBYyxrQkFFMUMrQixFQUFFVixPQUFPWSxRQUFRLG9CQUFzQkYsRUFBRVYsT0FBT1ksUUFBUSxlQUFpQkYsRUFBRVYsT0FBT1ksUUFBUSxpQkFDaEZELEVEOE9QSCxNQUFNSyxVQUFZLHdCQzVPckJILEVBQUVWLE9BQU9ZLFFBQVEsZUFDTkQsRUQ4T1JILE1BQU1LLFVBQVksNEJDN096QixJQUdKLE1BQU1DLEVBQVV0QyxTQUFTRyxjQUFjLGVBQ3ZDTixPQUFPMEMsT0FBUyxLQUNaRCxFQUFRTixNQUFNUSxRQUFVLE1BQU0sQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS12Mi8uL3NyYy9zY3JpcHRzL3RlbXBsYXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS12Mi8uL3NyYy9zY3JpcHRzL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5jb25zdCBjcmVhdGVQYWdlID0gKGh0bWwpID0+IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuXG4vKiBTbGlkZXNob3cgKi9cblxuY29uc3QgY2Fyb3VzZWxTdGFydCA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpO1xuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpO1xuICAgIGRvdHMuZm9yRWFjaCgoZG90KSA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4geyBzbGlkZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgfSk7XG4gICAgc2xpZGVzW3RhcmdldCAtIDFdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvdHNbdGFyZ2V0IC0gMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmNvbnN0IGNhcm91c2VsQXV0b1J1biA9ICgpID0+IHtcbiAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpO1xuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIgJiYgKHNsaWRlc1tpICsgMV0pKSB7XG4gICAgICAgICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZG90c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHNsaWRlc1tpICsgMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGRvdHNbaSArIDFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY2Fyb3VzZWxTdGFydCgxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdCBtb3ZlU2xpZGUgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpO1xuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpO1xuICAgIGlmIChpbmRleCA9PT0gMSkge1xuXG4gICAgICAgIGNhcm91c2VsQXV0b1J1bigpO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiICYmIChzbGlkZXNbaSAtIDFdKSkge1xuXG4gICAgICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHNsaWRlc1tpIC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBkb3RzW2kgLSAxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiICYmIGkgPT09IDApIHsvKiBpZiBvbmx5IGkgPT09IDAgaXMgdGhlIGNvbmRpdGlvbiwgdGhlIGxvb3AgYnJlYWtzIHJpZ2h0YXdheSBhdCB0aGUgc3RhcnQgLSByZXN1bHRpbmcgaW4gZHVwbGljYXRlIG9yIHByb2JsZW1hdGljIGZsb3cgKi9cblxuICAgICAgICAgICAgICAgIHNsaWRlc1swXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG90c1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjYXJvdXNlbFN0YXJ0KHNsaWRlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBkb3RNb3ZlID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XG4gICAgZG90cy5mb3JFYWNoKChkb3QpID0+IGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20oZG90cykuZmluZEluZGV4KChhKSA9PiBhLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgKyAxO1xuICAgIGNhcm91c2VsU3RhcnQoaW5kZXgpO1xufVxuXG4vKiBTZWN0aW9uIHN0eWxlIGRpdmlkZXIgKi9cblxuY29uc3QgaW50ZXJzZWN0aW9uT2JzZXJ2ZSA9IChncm91cENsYXNzLCB0SG9sZCwgY3VyQXR0LCBpbnRlckF0dCkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHtcbiAgICAgICAgcm9vdDogbnVsbCwgLyogU2VsZWN0IHRoZSBhcmVhIHRoYXQgdGhlIG9ic2VydmVyIGlzIGFwcGxpZWQgdG8sIG51bGwgPSBkZWZhdWx0IHRvIGJyb3dzZXIgdmlld3BvcnQgKi9cbiAgICAgICAgcm9vdE1hcmdpbjogJzBweCcsIC8qIE1hcmdpbiBhcm91bmQgdGhlIHJvb3QgKi9cbiAgICAgICAgdGhyZXNob2xkOiB0SG9sZCAvKiBFeGN1dGUgY2FsbGJhY2sgYXQgNTAlIG9mIHRhcmdldCB2aXNpYmlsaXR5LiBJZiB5b3Ugd2FudCB0aGUgY2FsbGJhY2sgdG8gcnVuIGV2ZXJ5IHRpbWUgdmlzaWJpbGl0eSBwYXNzZXMgYW5vdGhlciAyNSUsIHlvdSB3b3VsZCBzcGVjaWZ5IHRoZSBhcnJheSBbMCwgMC4yNSwgMC41LCAwLjc1LCAxXSAtIE1heWJlIGdvb2QgZm9yIGR5bmFtaWMgY29sb3IgY2hhbmdpbmcgb2YgYmFja2dyb3VuZCAqL1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9ic2VydmVyQ2FsbGJhY2soZW50cmllcywgb2JzZXJ2ZXIpIHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgey8qIE1hbnkgb3B0aW9ucy4gRS5nLiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IHByZXZSYXRpbyBtZWFucyB0aGF0IGZvciBlYWNoIHNlY3Rpb24gb2YgZW50cmllcywgd2UgbG9vayB0byBzZWUgaWYgdGhlIHJhdGlvIGlzIGdvaW5nIHVwIChwcmV2UmF0aW8gPSBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbzsgbWVhbmluZyBncmFkdWFsbHkgY2hlY2tpbmcgdGhlIHBvc2l0aW9uIC0gc2Nyb2xsIHVwIG9yIHNjcm9sbCBkb3duKSAqL1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZW50cnkudGFyZ2V0LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LnJlcGxhY2UoY3VyQXR0LCBpbnRlckF0dCkpXG4gICAgICAgICAgICAgICAgLyogZmFkZSBpbiBlbGVtcyB0aGF0IGFyZSBpbiB2aWV3ICovXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShlbnRyeS50YXJnZXQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5jbGFzc0xpc3QucmVwbGFjZShpbnRlckF0dCwgY3VyQXR0KSlcbiAgICAgICAgICAgICAgICAvKiBmYWRlIG91dCBlbGVtcyB0aGF0IGFyZSBubyBsb25nZXIgaW4gdmlldyAqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjaywgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgICBjb25zdCB0YXJnZXRHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZ3JvdXBDbGFzcyk7XG4gICAgdGFyZ2V0R3JvdXAuZm9yRWFjaCh0YXJnZXQgPT4gb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpKTtcbn1cblxuY29uc3QgYmFja2dyb3VuZENoYW5nZXIgPSAoZ3JvdXBDbGFzcywgdGhvbGQsIHRhcmdldEVsKSA9PiB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSAoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIC8qIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZW50cnkudGFyZ2V0LmRhdGFzZXQuY29sb3I7ICovXG4gICAgICAgICAgICAgICAgLyogdGFyZ2V0RWwuc3R5bGUuYmFja2dyb3VuZCA9IHRhcmdldENzcztcbiAgICAgICAgICAgICAgICB0YXJnZXRFbC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICAgICAgICAgICAgICB0YXJnZXRFbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjsgKi9cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldEVsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0RWxbMF0pLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRFbFsxXSkuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldEVsWzJdKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCB7IHRocmVzaG9sZDogdGhvbGQgfSk7XG4gICAgY29uc3QgdGFyZ2V0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGdyb3VwQ2xhc3MpO1xuICAgIHRhcmdldEdyb3VwLmZvckVhY2godGFyZ2V0ID0+IG9ic2VydmVyLm9ic2VydmUodGFyZ2V0KSlcbn1cblxuY29uc3QgdW5pdmVyc2FsT2JzZXJ2ZXIgPSAoZ3JvdXBDbGFzcywgdGhvbGQsIHRhcmdldEVsQ2xhc3MsIGN1cnJBdHQsIG5ld0F0dCkgPT4ge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRFbEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0RWxDbGFzcyk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RWxBbGwuZm9yRWFjaCgodGFyZ2V0RWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWwuY2xhc3NMaXN0LnJlcGxhY2UoY3VyckF0dCwgbmV3QXR0KVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIHsgdGhyZXNob2xkOiB0aG9sZCB9KTtcbiAgICBjb25zdCB0YXJnZXRHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZ3JvdXBDbGFzcyk7XG4gICAgdGFyZ2V0R3JvdXAuZm9yRWFjaCh0YXJnZXQgPT4gb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpKVxufVxuXG4vKiBjb25zdCBzcGVjaWZpY09ic2VydmVyID0gKGdyb3VwQ2xhc3MsIHRob2xkLCB0YXJnZXRFbCwgY3VyckF0dCwgbmV3QXR0KSA9PiB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSAoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldEVsKVxuICAgICAgICAgICAgICAgIHRhcmdldEVsLnNldFByb3BlcnR5KCdvcGFjaXR5JywgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIHsgdGhyZXNob2xkOiB0aG9sZCB9KTtcbiAgICBjb25zdCB0YXJnZXRHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZ3JvdXBDbGFzcyk7XG4gICAgdGFyZ2V0R3JvdXAuZm9yRWFjaCh0YXJnZXQgPT4gb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpKVxufSAqL1xuXG4vKiBHYWxsZXJ5IGludGVydmFsICovXG5cbmNvbnN0IGludGVydmFsID0ge1xuICAgIGludGVydmFsczogbmV3IFNldCgpLFxuXG4gICAgbWFrZUludGVydmFsKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgbmV3SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbHMuYWRkKG5ld0ludGVydmFsKTtcbiAgICAgICAgcmV0dXJuIG5ld0ludGVydmFsO1xuICAgIH0sXG5cbiAgICBtYWtlVGltZW91dCguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IG5ld1RpbWVvdXQgPSBzZXRUaW1lb3V0KC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmludGVydmFscy5hZGQobmV3VGltZW91dCk7XG4gICAgICAgIHJldHVybiBuZXdUaW1lb3V0O1xuICAgIH0sXG5cbiAgICBjbGVhcihpZCkge1xuICAgICAgICB0aGlzLmludGVydmFscy5kZWxldGUoaWQpO1xuICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfSxcblxuICAgIGNsZWFyQWxsKCkge1xuICAgICAgICB0aGlzLmludGVydmFscy5jbGVhcigpO1xuICAgIH1cbn1cblxuY29uc3Qgc2h1ZmZsZUltYWdlID0gKGltYWdlQ2xhc3MpID0+IHtcbiAgICBjb25zdCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW1hZ2VDbGFzcykpO1xuICAgIGNvbnN0IGltZ0FycmF5ID0gW107XG5cbiAgICBpbnRlcnZhbC5pbnRlcnZhbHMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKFsuLi5pbnRlcnZhbC5pbnRlcnZhbHNdLmluZGV4T2YodmFsdWUpID49IDIpIHtcbiAgICAgICAgICAgIGludGVydmFsLmludGVydmFscy5kZWxldGUodmFsdWUpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICBpbWdBcnJheS5zcGxpY2UoMCwgaW1nQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgICAgIGltZ0FycmF5LnB1c2goaW1hZ2UpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHByZXZTbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGltZ0FycmF5WzBdLmlkKTtcbiAgICBsZXQgY3VyU2xpZGU7XG4gICAgbGV0IG5leHRTbGlkZTtcblxuICAgIGNvbnN0IHNldFNsaWRlU3R5bGVzID0gKCkgPT4ge1xuICAgICAgICBjdXJTbGlkZS5zdHlsZS56SW5kZXggPSAnMTAnO1xuICAgICAgICBjdXJTbGlkZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbmV4dFNsaWRlLnN0eWxlLnpJbmRleCA9ICc5JztcbiAgICAgICAgbmV4dFNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBjb25zdCBzZXRQcmV2U2xpZGUgPSAoKSA9PiB7XG4gICAgICAgIHByZXZTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoKE51bWJlcihpbWdBcnJheVswXS5pZCkgPCBpbWFnZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgY3VyU2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgoTnVtYmVyKGltZ0FycmF5WzBdLmlkKSArIDEpLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIGlmIChOdW1iZXIoY3VyU2xpZGUuaWQpIDwgaW1hZ2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIG5leHRTbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE51bWJlcihjdXJTbGlkZS5pZCkgKyAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIoY3VyU2xpZGUuaWQpID49IGltYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBuZXh0U2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMCcpO1xuICAgICAgICB9XG4gICAgICAgIGN1clNsaWRlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWFjdGl2ZScpO1xuXG4gICAgICAgIGludGVydmFsLm1ha2VUaW1lb3V0KHNldFNsaWRlU3R5bGVzLCA1MDAwKTtcblxuXG4gICAgfSBlbHNlIGlmICgoTnVtYmVyKGltZ0FycmF5WzBdLmlkKSA+PSBpbWFnZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgY3VyU2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMCcpO1xuXG5cbiAgICAgICAgaWYgKE51bWJlcihjdXJTbGlkZS5pZCkgPCBpbWFnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbmV4dFNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoTnVtYmVyKGN1clNsaWRlLmlkKSArIDEpO1xuICAgICAgICAgICAgbmV4dFNsaWRlLnN0eWxlLnpJbmRleCA9ICc5JztcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIoY3VyU2xpZGUuaWQpID49IGltYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBuZXh0U2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMCcpO1xuICAgICAgICAgICAgbmV4dFNsaWRlLnN0eWxlLnpJbmRleCA9ICc5JztcbiAgICAgICAgfVxuICAgICAgICBjdXJTbGlkZS5jbGFzc0xpc3QuYWRkKCdzbGlkZS1hY3RpdmUnKTtcblxuICAgICAgICBpbnRlcnZhbC5tYWtlVGltZW91dChzZXRTbGlkZVN0eWxlcywgNTAwMCk7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwubWFrZVRpbWVvdXQoc2V0UHJldlNsaWRlLCA1MDAwKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpbWFnZXNbaV0gIT09IGN1clNsaWRlICYmIGltYWdlc1tpXSAhPT0gbmV4dFNsaWRlKSB7XG4gICAgICAgICAgICBjb25zdCBzZXRJbWFnZXNTdHlsZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzW2ldLnN0eWxlLnpJbmRleCA9ICc4JztcbiAgICAgICAgICAgICAgICBpbWFnZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGludGVydmFsLm1ha2VUaW1lb3V0KHNldEltYWdlc1N0eWxlcywgNTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vKiBOYXYgc3R5bGVzICovXG5cbmNvbnN0IGNsaWNrT3BlbiA9ICh0YXJnZXQpID0+IHtcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiO1xufVxuY29uc3QgY2xpY2tDbG9zZSA9ICh0YXJnZXQpID0+IHtcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZCgtNDUwcHgsIDAsIDApXCI7XG59XG5cbmNvbnN0IG5hdlNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGlja3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RpY2t5LW5hdmJhcicpXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMjUgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDI1KSB7XG4gICAgICAgIC8qIHNjcm9sbCAyMHB4IGZyb20gdG9wIG9mIHRoZSBlbGVtZW50IChib2R5IG9yIFJPT1QpIC0gY2hhbmdlIHRoaXMgaW50byBvcmlnaW5hbCBuYXYgYmFyIGhlaWdodCAqL1xuICAgICAgICBzdGlja3kuc3R5bGUudG9wID0gJzAnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0aWNreS5zdHlsZS50b3AgPSAnLTE4MHB4JztcbiAgICB9XG59XG5cbmNvbnN0IHRhYk5hdlN0eWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVmdC1jb250ZW50IGEnKTtcbiAgICBjb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TmF2Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjdXJyZW50TmF2W2ldLmlkID09PSBjdXJyZW50Q29udGVudC5jbGFzc0xpc3RbMV0pIHtcbiAgICAgICAgICAgIGN1cnJlbnROYXZbaV0uY2xhc3NMaXN0LnJlcGxhY2UoJ25hdi1pbmFjdGl2ZScsICduYXYtYWN0aXZlJylcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbi8vISBVbnVzZWRcblxuLyogY29uc3Qgc3BsaWNlT2JqZWN0ID0gKG9iaiwgbnVtMSwgbnVtMikgPT4ge1xuICAgIGNvbnN0IG5ld09iaiA9IHt9O1xuICAgIGlmICghbnVtMikge1xuICAgICAgICBudW0yID0gMTtcbiAgICB9XG4gICAgb2JqLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gWy4uLm9ial0uaW5kZXhPZih2YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICAgIGlmIChpbmRleCA8IG51bTEgfHwgaW5kZXggPj0gbnVtMSArIG51bTIpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3T2JqLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKG5ld09iailcbiAgICByZXR1cm4gbmV3T2JqO1xufVxuXG5cbmNvbnN0IHN3aXRjaFRhYiA9ICh0YXJnZXQsIG5ld0NvbnRlbnQpID0+IHtcbiAgICBjb25zdCBjdXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBodG1sTmV3Q29udGVudCA9IG5ld0NvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGlmICghY3VyQ29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoYCR7dGFyZ2V0LmlkfWApKSB7XG4gICAgICAgIGN1ckNvbnRlbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaHRtbE5ld0NvbnRlbnQsIGN1ckNvbnRlbnQpO1xuICAgIH1cbn0gKi9cblxuZXhwb3J0IHsgY3JlYXRlUGFnZSwgY2xpY2tPcGVuLCBjbGlja0Nsb3NlLCBjYXJvdXNlbFN0YXJ0LCBjYXJvdXNlbEF1dG9SdW4sIG1vdmVTbGlkZSwgZG90TW92ZSwgaW50ZXJzZWN0aW9uT2JzZXJ2ZSwgbmF2U2Nyb2xsLCBzaHVmZmxlSW1hZ2UsIGludGVydmFsLCBiYWNrZ3JvdW5kQ2hhbmdlciwgdW5pdmVyc2FsT2JzZXJ2ZXIsIHRhYk5hdlN0eWxlIH07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGNsaWNrT3BlbiwgY2xpY2tDbG9zZSwgbmF2U2Nyb2xsLCB1bml2ZXJzYWxPYnNlcnZlciwgdGFiTmF2U3R5bGUgfSBmcm9tIFwiLi4vc2NyaXB0cy90ZW1wbGF0ZVwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICB0YWJOYXZTdHlsZSgpO1xuXG4gICAgWycuc2hvd2Nhc2UnLCAnLmhvbWUtbWVudScsICcuaW50cm8nLCAnLmZpeGVkLWJnMS10ZXh0J10uZm9yRWFjaCgocGFyZW50Q2xhc3MpID0+IHtcbiAgICAgICAgdW5pdmVyc2FsT2JzZXJ2ZXIocGFyZW50Q2xhc3MsIDAuMywgcGFyZW50Q2xhc3MsICdmYWRlT3V0JywgJ2ZhZGVJbicpXG4gICAgfSlcbn0pO1xuXG53aW5kb3cub25zY3JvbGwgPSBuYXZTY3JvbGw7XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gey8qIFVzZSBldmVudCBkZWxlZ2F0aW9uICovXG4gICAgY29uc3Qgc2lkZU5hdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci5tZW51Jyk7XG5cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLnNpZGViYXIuc3ltYm9sJykgfHwgZS50YXJnZXQubWF0Y2hlcygnLm1lbnUtaWNvbicpIHx8IGUudGFyZ2V0Lm1hdGNoZXMoJy5tZW51LXRleHQnKSkge1xuICAgICAgICBjbGlja09wZW4oc2lkZU5hdkNvbnRlbnQpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmNsb3NlQnRuJykpIHtcbiAgICAgICAgY2xpY2tDbG9zZShzaWRlTmF2Q29udGVudCk7XG4gICAgfVxufSk7XG5cbmNvbnN0IHByZUxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlLWxvYWRlcicpXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIHByZUxvYWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0iXSwibmFtZXMiOlsiU2V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnROYXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50Q29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpIiwibGVuZ3RoIiwiaWQiLCJjbGFzc0xpc3QiLCJyZXBsYWNlIiwidGFiTmF2U3R5bGUiLCJmb3JFYWNoIiwicGFyZW50Q2xhc3MiLCJncm91cENsYXNzIiwidGhvbGQiLCJ0YXJnZXRFbENsYXNzIiwiY3VyckF0dCIsIm5ld0F0dCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldEVsIiwidGhyZXNob2xkIiwidGFyZ2V0Iiwib2JzZXJ2ZSIsInVuaXZlcnNhbE9ic2VydmVyIiwib25zY3JvbGwiLCJzdGlja3kiLCJib2R5Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJ0b3AiLCJlIiwic2lkZU5hdkNvbnRlbnQiLCJtYXRjaGVzIiwidHJhbnNmb3JtIiwicHJlTG9hZCIsIm9ubG9hZCIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9