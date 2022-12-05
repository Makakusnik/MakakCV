module.exports = {
  apps : [{
    name   : "OldestCv",
    script : "npm run start",
	log_date_format: "YYYY-MM-DD HH:mm Z",
	env_production: {
	NODE_ENV: "production"
}
  }]
}
