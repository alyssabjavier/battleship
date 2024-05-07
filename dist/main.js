(()=>{var t={409:t=>{class r{constructor(){this.grid=this.initializeGrid(),this.ships=[]}initializeGrid(){const t=new Array(10);for(let r=0;r<10;r++){t[r]=new Array(10);for(let i=0;i<10;i++)t[r][i]=null}return t}placeShip(t,r,i,s){r-=1,i-=1;const e=t.length;if(this.ships.push(t),"horizontal"==s){if(r+e>10)return"error - ship cannot be placed outside of bounds of the gameboard";this.grid[i][r]=t;for(let s=0;s<e;s++)this.grid[i][r+s]=t}else if("vertical"==s){if(i+e>10)return"error - ship cannot be placed outside of bounds of the gameboard";this.grid[i][r]=t;for(let s=0;s<e;s++)this.grid[i+s][r]=t}return this.grid}receiveAttack(t,r){return t-=1,r-=1,"M"==this.grid[r][t]||"H"==this.grid[r][t]?"error - coordinate already marked":(null==this.grid[r][t]?this.grid[r][t]="M":(this.grid[r][t].hit(),this.grid[r][t]="H"),this.grid)}areShipsSunk(){let t=0;return this.ships.forEach((r=>{r.sunkStatus&&t++})),t==this.ships.length}}const i=new class{constructor(t){this.type=t,this.board=new r}}("real");console.log(i),t.exports={Ship:class{constructor(t){this.length=t,this.hitCount=0,this.sunkStatus=this.isSunk()}hit(){this.hitCount++,this.sunkStatus=this.isSunk()}isSunk(){return this.hitCount>=this.length}},Gameboard:r}}},r={};function i(s){var e=r[s];if(void 0!==e)return e.exports;var o=r[s]={exports:{}};return t[s](o,o.exports,i),o.exports}i.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return i.d(r,{a:r}),r},i.d=(t,r)=>{for(var s in r)i.o(r,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})},i.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";i(409),console.log("hello world 2")})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoicUJBaUJBLE1BQU1BLEVBQ0YsV0FBQUMsR0FDSUMsS0FBS0MsS0FBT0QsS0FBS0UsaUJBQ2pCRixLQUFLRyxNQUFRLEVBQ2pCLENBRUEsY0FBQUQsR0FDSSxNQUNNRCxFQUFPLElBQUlHLE1BREosSUFFYixJQUFLLElBQUlDLEVBQUksRUFBR0EsRUFGSCxHQUVhQSxJQUFLLENBQzNCSixFQUFLSSxHQUFLLElBQUlELE1BSEwsSUFJVCxJQUFLLElBQUlFLEVBQUksRUFBR0EsRUFKUCxHQUlpQkEsSUFDdEJMLEVBQUtJLEdBQUdDLEdBQUssSUFFckIsQ0FDQSxPQUFPTCxDQUNYLENBRUEsU0FBQU0sQ0FBVUMsRUFBWUMsRUFBUUMsRUFBUUMsR0FDbENGLEdBQWtCLEVBQ2xCQyxHQUFrQixFQUNsQixNQUFNRSxFQUFTSixFQUFXSSxPQUcxQixHQUZBWixLQUFLRyxNQUFNVSxLQUFLTCxHQUVDLGNBQWJHLEVBQTJCLENBQzNCLEdBQUlGLEVBQVNHLEVBQVMsR0FDbEIsTUFBTyxtRUFFUFosS0FBS0MsS0FBS1MsR0FBUUQsR0FBVUQsRUFDNUIsSUFBSyxJQUFJSCxFQUFJLEVBQUdBLEVBQUlPLEVBQVFQLElBQ3hCTCxLQUFLQyxLQUFLUyxHQUFRRCxFQUFTSixHQUFLRyxDQUc1QyxNQUVLLEdBQWlCLFlBQWJHLEVBQXlCLENBQzlCLEdBQUlELEVBQVNFLEVBQVMsR0FDbEIsTUFBTyxtRUFFUFosS0FBS0MsS0FBS1MsR0FBUUQsR0FBVUQsRUFDNUIsSUFBSyxJQUFJSCxFQUFJLEVBQUdBLEVBQUlPLEVBQVFQLElBQ3hCTCxLQUFLQyxLQUFLUyxFQUFTTCxHQUFHSSxHQUFVRCxDQUc1QyxDQUVBLE9BQU9SLEtBQUtDLElBQ2hCLENBRUEsYUFBQWEsQ0FBY0wsRUFBUUMsR0FJbEIsT0FIQUQsR0FBa0IsRUFDbEJDLEdBQWtCLEVBRWUsS0FBN0JWLEtBQUtDLEtBQUtTLEdBQVFELElBQStDLEtBQTdCVCxLQUFLQyxLQUFLUyxHQUFRRCxHQUMvQyxxQ0FHMkIsTUFBN0JULEtBQUtDLEtBQUtTLEdBQVFELEdBQ3ZCVCxLQUFLQyxLQUFLUyxHQUFRRCxHQUFVLEtBSTVCVCxLQUFLQyxLQUFLUyxHQUFRRCxHQUFRTSxNQUMxQmYsS0FBS0MsS0FBS1MsR0FBUUQsR0FBVSxLQUd6QlQsS0FBS0MsS0FDaEIsQ0FFQSxZQUFBZSxHQUNJLElBQUlDLEVBQVUsRUFNZCxPQUxBakIsS0FBS0csTUFBTWUsU0FBU0MsSUFDWkEsRUFBS0MsWUFDTEgsR0FDSixJQUVHQSxHQUFXakIsS0FBS0csTUFBTVMsTUFDakMsRUFVSixNQUFNUyxFQUFZLElBUGxCLE1BQ0ksV0FBQXRCLENBQVl1QixHQUNSdEIsS0FBS3NCLEtBQU9BLEVBQ1p0QixLQUFLdUIsTUFBUSxJQUFJekIsQ0FDckIsR0FHeUIsUUFDN0IwQixRQUFRQyxJQUFJSixHQUVaSyxFQUFPQyxRQUFVLENBQ2JDLEtBNUdKLE1BQ0ksV0FBQTdCLENBQVlhLEdBQ1JaLEtBQUtZLE9BQVNBLEVBQ2RaLEtBQUs2QixTQUFXLEVBQ2hCN0IsS0FBS29CLFdBQWFwQixLQUFLOEIsUUFDM0IsQ0FFQSxHQUFBZixHQUNJZixLQUFLNkIsV0FDTDdCLEtBQUtvQixXQUFhcEIsS0FBSzhCLFFBQzNCLENBRUEsTUFBQUEsR0FDSSxPQUFPOUIsS0FBSzZCLFVBQVk3QixLQUFLWSxNQUNqQyxHQThGTWQsWSxHQzNHTmlDLEVBQTJCLENBQUMsRUFHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYVAsUUFHckIsSUFBSUQsRUFBU0ssRUFBeUJFLEdBQVksQ0FHakROLFFBQVMsQ0FBQyxHQU9YLE9BSEFTLEVBQW9CSCxHQUFVUCxFQUFRQSxFQUFPQyxRQUFTSyxHQUcvQ04sRUFBT0MsT0FDZixDQ3JCQUssRUFBb0JLLEVBQUtYLElBQ3hCLElBQUlZLEVBQVNaLEdBQVVBLEVBQU9hLFdBQzdCLElBQU9iLEVBQWlCLFFBQ3hCLElBQU0sRUFFUCxPQURBTSxFQUFvQlEsRUFBRUYsRUFBUSxDQUFFRyxFQUFHSCxJQUM1QkEsQ0FBTSxFQ0xkTixFQUFvQlEsRUFBSSxDQUFDYixFQUFTZSxLQUNqQyxJQUFJLElBQUlDLEtBQU9ELEVBQ1hWLEVBQW9CWSxFQUFFRixFQUFZQyxLQUFTWCxFQUFvQlksRUFBRWpCLEVBQVNnQixJQUM1RUUsT0FBT0MsZUFBZW5CLEVBQVNnQixFQUFLLENBQUVJLFlBQVksRUFBTUMsSUFBS04sRUFBV0MsSUFFMUUsRUNORFgsRUFBb0JZLEVBQUksQ0FBQ0ssRUFBS0MsSUFBVUwsT0FBT00sVUFBVUMsZUFBZUMsS0FBS0osRUFBS0MsRywwQkNFbEYxQixRQUFRQyxJQUFJLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLWNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuc3Vua1N0YXR1cyA9IHRoaXMuaXNTdW5rKCk7XG4gICAgfTtcblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRDb3VudCsrO1xuICAgICAgICB0aGlzLnN1bmtTdGF0dXMgPSB0aGlzLmlzU3VuaygpO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0Q291bnQgPj0gdGhpcy5sZW5ndGg7XG4gICAgfVxufVxuXG5jbGFzcyBHYW1lYm9hcmQgeyAvLyAxMHgxMCBncmlkXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuaW5pdGlhbGl6ZUdyaWQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIH1cblxuICAgIGluaXRpYWxpemVHcmlkKCkge1xuICAgICAgICBjb25zdCBzaXplID0gMTA7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBncmlkW2ldID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICBncmlkW2ldW2pdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcE9iamVjdCwgeENvb3JkLCB5Q29vcmQsIGRpcmVjdGlvbikge1xuICAgICAgICB4Q29vcmQgPSB4Q29vcmQgLSAxO1xuICAgICAgICB5Q29vcmQgPSB5Q29vcmQgLSAxO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwT2JqZWN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXBPYmplY3QpO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBpZiAoeENvb3JkICsgbGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yIC0gc2hpcCBjYW5ub3QgYmUgcGxhY2VkIG91dHNpZGUgb2YgYm91bmRzIG9mIHRoZSBnYW1lYm9hcmQnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbeUNvb3JkXVt4Q29vcmRdID0gc2hpcE9iamVjdDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFt5Q29vcmRdW3hDb29yZCArIGldID0gc2hpcE9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgaWYgKHlDb29yZCArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvciAtIHNoaXAgY2Fubm90IGJlIHBsYWNlZCBvdXRzaWRlIG9mIGJvdW5kcyBvZiB0aGUgZ2FtZWJvYXJkJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW3lDb29yZF1beENvb3JkXSA9IHNoaXBPYmplY3Q7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbeUNvb3JkICsgaV1beENvb3JkXSA9IHNoaXBPYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZDtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHhDb29yZCwgeUNvb3JkKSB7XG4gICAgICAgIHhDb29yZCA9IHhDb29yZCAtIDE7XG4gICAgICAgIHlDb29yZCA9IHlDb29yZCAtIDE7XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JpZFt5Q29vcmRdW3hDb29yZF0gPT0gJ00nIHx8IHRoaXMuZ3JpZFt5Q29vcmRdW3hDb29yZF0gPT0gJ0gnKSB7IC8vIGlmIGFscmVhZHkgaGl0IG9yIG1pc3NlZFxuICAgICAgICAgICAgcmV0dXJuICdlcnJvciAtIGNvb3JkaW5hdGUgYWxyZWFkeSBtYXJrZWQnXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZ3JpZFt5Q29vcmRdW3hDb29yZF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkW3lDb29yZF1beENvb3JkXSA9ICdNJzsgLy8gTSA9IG1pc3NcbiAgICAgICAgfSBcblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt5Q29vcmRdW3hDb29yZF0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmdyaWRbeUNvb3JkXVt4Q29vcmRdID0gJ0gnOyAvLyBIID0gaGl0XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQ7XG4gICAgfVxuXG4gICAgYXJlU2hpcHNTdW5rKCkge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuc3Vua1N0YXR1cykge1xuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNvdW50ZXIgPT0gdGhpcy5zaGlwcy5sZW5ndGg7XG4gICAgfVxufVxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQ7XG4gICAgfVxufVxuXG5jb25zdCBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdyZWFsJyk7XG5jb25zb2xlLmxvZyhwbGF5ZXJPbmUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBTaGlwLCBHYW1lYm9hcmRcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lLWNvbXBvbmVudHMnXG5cbmNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCAyJylcbiJdLCJuYW1lcyI6WyJHYW1lYm9hcmQiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJncmlkIiwiaW5pdGlhbGl6ZUdyaWQiLCJzaGlwcyIsIkFycmF5IiwiaSIsImoiLCJwbGFjZVNoaXAiLCJzaGlwT2JqZWN0IiwieENvb3JkIiwieUNvb3JkIiwiZGlyZWN0aW9uIiwibGVuZ3RoIiwicHVzaCIsInJlY2VpdmVBdHRhY2siLCJoaXQiLCJhcmVTaGlwc1N1bmsiLCJjb3VudGVyIiwiZm9yRWFjaCIsInNoaXAiLCJzdW5rU3RhdHVzIiwicGxheWVyT25lIiwidHlwZSIsImJvYXJkIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJTaGlwIiwiaGl0Q291bnQiLCJpc1N1bmsiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=