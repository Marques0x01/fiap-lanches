resource "aws_alb" "load_balancer" {
  name               = "fiap-elb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = ["sg-03a42246d68e36881"]
  subnets = ["subnet-0021188e56e554c5f",
"subnet-09d730e37488224fc",
"subnet-08e6c129c139bdf4e"]

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
  vpc_id      = "vpc-0dd107ee670f6ef29"
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
