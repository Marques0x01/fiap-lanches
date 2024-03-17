terraform {
  backend "s3" {
    bucket         = "fiap-tfstates"
    key            = "fiap-lanches-app/terraform.tfstate"
    region         = "sa-east-1"
    
  }
}
