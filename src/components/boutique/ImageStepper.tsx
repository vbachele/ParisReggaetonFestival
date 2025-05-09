import { Stepper, StepperIndicator, StepperItem, StepperTrigger } from "@/components/ui/stepper";

interface ImageStepperProps {
  images: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  showLoadingBar?: boolean;
}

export const ImageStepper = ({ images, currentImageIndex, setCurrentImageIndex, showLoadingBar }: ImageStepperProps) => (
  <div className="absolute top-2 left-0 right-0 px-2 md:px-4">
    <div className="flex items-center justify-center gap-1 md:gap-2">
      <Stepper
        value={currentImageIndex + 1}
        onValueChange={(value) => setCurrentImageIndex(value - 1)}
        className="gap-0.5 md:gap-1"
      >
        {images.map((_, index) => (
          <StepperItem key={index} step={index + 1} className="flex-1">
            <StepperTrigger
              className="w-full flex-col items-start gap-0.5 md:gap-1"
              asChild
            >
              <StepperIndicator 
                asChild 
                className={`h-0.5 w-full relative overflow-hidden ${
                  index < currentImageIndex 
                    ? 'bg-white' 
                    : index === currentImageIndex 
                      ? 'bg-white/50' 
                      : 'bg-white/50'
                }`}
              >
                {index === currentImageIndex && showLoadingBar && (
                  <div className="absolute top-0 left-0 h-full bg-white animate-loading-bar" />
                )}
                <span className="sr-only">Image {index + 1}</span>
              </StepperIndicator>
            </StepperTrigger>
          </StepperItem>
        ))}
      </Stepper>
    </div>
  </div>
);

export default ImageStepper; 