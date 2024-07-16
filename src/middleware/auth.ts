const jwt = require('jsonwebtoken');
import express, { NextFunction, Request, Response } from "express"

const authenticateToken= (req: Request , res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
  
      next()
    })
}

export { authenticateToken }