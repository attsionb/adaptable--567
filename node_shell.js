const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'57ba4e49-f7a0-4f4a-a6f4-30a301e219b5'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
