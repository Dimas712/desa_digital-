import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/cnc/ui/alert-dialog";
  import { Button } from "@/components/cnc/ui/button";
  
  function RequestCertButton() {
    
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size="large"
            data-aos="fade-up"
            className="py-4 px-12 mt-10 text-lg"
          >
            Urus sekarang
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Login diperlukan</AlertDialogTitle>
                <AlertDialogDescription>
                  Anda perlu melakukan autentikasi login di website kami. Apakah
                  bersedia untuk melakukan login?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Batal</AlertDialogCancel>
                <AlertDialogAction>
                  Konfirmasi
                </AlertDialogAction>
              </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  
  export default RequestCertButton;
  