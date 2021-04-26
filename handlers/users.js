const { PrismaClient } = require('@prisma/client')
// import { PrismaClient } from '@prisma/client'
// import prisma from './prisma/prisma'

const prisma = new PrismaClient()

exports.handler = async (event, context, callback) => {
  try {
    const rules_aws_custodian = await prisma.rules_aws_custodian.findUnique({
      where: {
        id: 1,
      },
    })
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rules_aws_custodian)
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(error)
    }
  }
}
