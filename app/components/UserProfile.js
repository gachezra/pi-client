import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function UserProfile({ user, isSandbox }) {
  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Pi Network User Profile
          {isSandbox && (
            <span className="text-sm font-normal px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
              Sandbox Mode
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Username</p>
            <p className="text-lg font-semibold">{user.username}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">User ID</p>
            <p className="text-lg font-mono">{user.uid}</p>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500">
              {isSandbox 
                ? "Running in sandbox mode - perfect for development and testing!"
                : "Running in production mode"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
