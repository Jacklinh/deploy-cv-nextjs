const LoadingSkeleton = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative pt-10 max-xl:pt-20">
        <div className="max-lg:px-4">
          {/* Profile Section Skeleton */}
          <div className="fixed top-0 bottom-0 left-0 w-full max-w-xs p-8 overflow-y-auto bg-white dark:bg-nightBlack max-xl:hidden">
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
              <div className="w-48 h-6 mt-4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
              <div className="w-32 h-4 mt-2 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
            </div>
            
            {/* Contact Info Skeleton */}
            <div className="mt-8 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                  <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Skeleton */}
          <div className="relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
            <div className="py-5 xl:py-3.5 max-w-content max-xl:mx-auto xl:ml-auto xl:max-2xl:max-w-50rem">
              {/* Section Header Skeleton */}
              <div className="mb-8">
                <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
                <div className="w-64 h-8 mt-4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
              </div>

              {/* Content Grid Skeleton */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="p-4 bg-white dark:bg-gray-800 rounded-xl"
                  >
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                    <div className="w-3/4 h-4 mt-4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
                    <div className="w-1/2 h-4 mt-2 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Skeleton */}
          <div className="fixed top-1/2 -translate-y-1/2 right-4 2xl:right-14 max-xl:hidden">
            <div className="flex flex-col items-center space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton; 