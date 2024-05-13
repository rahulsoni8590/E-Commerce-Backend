import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'request-logging' },
    transports: [
      new winston.transports.File({ filename: 'request.log'}),
    ],
  });

const loggerMiddeware = (req,res,next)=>{
    const data = {
        Time: new Date().toLocaleString(),
        body: JSON.stringify(req.body) || "None",
        method:req.method,
        url: req.originalUrl,
    }
    logger.info(data)
    next()
}

export default loggerMiddeware