import HTTP from 'node:http';

const PORT = process.PORT || 8080;
const server = HTTP.createServer((request, response) => {
	response.writeHead(200, {
		"Access-Control-Allow-Origin": "https://dashboard.render.com",
		"Access-Control-Allow-Methods": "GET, PING, OPTIONS",
		"Content-Type": "text/html"
	} as const);
	response.end("<h3>Im Alive</h3>");
});



export default (): void => {
	server.listen(PORT, () => console.log("Server for UptimeRobot is ready!"));
};