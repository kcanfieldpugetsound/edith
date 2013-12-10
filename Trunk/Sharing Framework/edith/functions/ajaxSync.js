function loadProject(projectId) {
	$.getJSON("load.php", {id:projectId}, function(data) {
		$("#theText").html(data.pCode);
	});
}