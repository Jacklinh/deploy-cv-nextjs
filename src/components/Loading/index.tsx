interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
}

const Loading = ({ size = 'md' }: LoadingProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer spinning circle */}
        <div 
          className={`absolute ${sizeClasses[size]} border-4 border-dashed rounded-full animate-spin border-theme`}
          style={{ animationDuration: '3s' }}
        />
        {/* Inner spinning circle */}
        <div 
          className={`absolute ${sizeClasses[size]} border-4 border-transparent border-t-theme rounded-full animate-spin`}
          style={{ animationDuration: '1.5s' }}
        />
      </div>
    </div>
  );
};

export default Loading; 