resource "aws_alb" "load_balancer" {
  name               = "fiap-elb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = ["sg-085b290724bbacb6b"]
  subnets = ["subnet-06d00c0f6bc10ac5a",
    "subnet-0b46ef3bfa2d46cb7",
    "subnet-00856156f6a861a71",
    "subnet-013d4706dc4716a99",
    "subnet-07365ebf779a73a70",
  "subnet-064177c5c249a2022"]

}


resource "aws_alb_listener" "front_end" {
  load_balancer_arn = aws_alb.load_balancer.id
  port              = 3000
  protocol          = "HTTP"

  default_action {
    target_group_arn = aws_alb_target_group.target_group.id
    type             = "forward"
  }
}

resource "aws_alb_target_group" "target_group" {
  name        = "fiap-target-group"
  port        = 3000
  protocol    = "HTTP"
  vpc_id      = "vpc-027a42fb2debebec1"
  target_type = "ip"

  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "200,301"
    timeout             = "10"
    path                = "/api-docs"
    unhealthy_threshold = "3"
  }
}
