import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const WorkshopCardSkeleton = () => (
  <Card className="liquid-glass-surface">
    <CardHeader>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <Skeleton className="h-10 w-full" />
    </CardContent>
  </Card>
);

export const TeamMemberSkeleton = () => (
  <Card className="liquid-glass-surface text-center">
    <CardContent className="pt-6">
      <Skeleton className="h-20 w-20 rounded-full mx-auto mb-4" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
      <Skeleton className="h-4 w-1/2 mx-auto mb-4" />
      <Skeleton className="h-16 w-full" />
    </CardContent>
  </Card>
);

export const SuccessStorySkeleton = () => (
  <Card className="liquid-glass-surface">
    <CardHeader>
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div>
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <Skeleton className="h-4 w-1/2" />
    </CardContent>
  </Card>
);

export const GallerySkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <Card key={i} className="liquid-glass-surface overflow-hidden">
        <Skeleton className="h-48 w-full" />
        <CardContent className="p-4">
          <Skeleton className="h-5 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </CardContent>
      </Card>
    ))}
  </div>
);

const LoadingSkeletons = {
  WorkshopCard: WorkshopCardSkeleton,
  TeamMember: TeamMemberSkeleton,
  SuccessStory: SuccessStorySkeleton,
  Gallery: GallerySkeleton,
};

export default LoadingSkeletons;