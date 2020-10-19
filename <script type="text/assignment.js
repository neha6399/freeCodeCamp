<script type="text/javascript">
    function getpairs(arr){
	const len=arr.length;
	let count=0;
	const sarr=arr.sort();
	let i=0;
	while(i<len){
	    if(sarr[i]===sarr[i+1]){
		    count++;
			i=i+2;
			}
		else{
		i=i+1;
		}
		}
	return count;
	}
	
	
</script>
