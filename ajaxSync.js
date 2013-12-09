function loadProject(projectId) {
	$.getJSON("load.php", {projectName:projectId}, function(data) {
		$("#theText").html(data);
	});
}