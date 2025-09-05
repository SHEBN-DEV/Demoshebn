export async function GET() {
  try {
    // You can add more health checks here
    // For example, check database connection, external services, etc.
    
    return Response.json(
      { 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { 
        status: 'unhealthy', 
        error: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 503 }
    );
  }
}
