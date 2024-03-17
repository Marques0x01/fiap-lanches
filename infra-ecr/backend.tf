terraform {
  backend "s3" {
    bucket         = "fiap-terraform-tfstates"
    key            = "fiap-lanches-app/terraform.tfstate"
    region         = "sa-east-1"
    
  }
}
