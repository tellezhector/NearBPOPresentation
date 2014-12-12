var adjacency = aco.randomAdjacency(20, 0.05);
graph = aco.graphFromAdjacency(adjacency);
aco.draw(graph, "body");

aco.adjacency1 = 
[
	[0, 0, 1, 0, 0],
	[0, 0, 1, 1, 1],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0]
];

aco.adjacency2 =
[	
	[0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
	[0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

