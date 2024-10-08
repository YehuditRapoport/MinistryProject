//using Microsoft.AspNetCore.Mvc;
//using Microsoft.IdentityModel.Tokens;
//using Project.Core.Services;
//using Project_api.Models;
//using System.IdentityModel.Tokens.Jwt;
//using System.Security.Claims;
//using System.Text;

//// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

//namespace Project_api.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class LoginController : ControllerBase
//    {
//        private readonly ICustomerServices _customerService;
//        private readonly IConfiguration _configuration;

//        public LoginController(ICustomerServices customerService, IConfiguration configuration)
//        {
//            _configuration = configuration;
//            _customerService = customerService;
//        }

//        [HttpPost]
//        public IActionResult Login([FromBody] LoginModel loginModel)
//        {
//            var customer = _customerService.GetByCustomerNameAndPassword(loginModel.CustomerName, loginModel.Password);
//            if (customer is not null)
//            {
//                var claims = new List<Claim>()
//            {
//                new Claim("Id", customer.Id.ToString()),
//                new Claim(ClaimTypes.Role, "admin")
//            };

//                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("JWT:Key")));
//                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
//                var tokeOptions = new JwtSecurityToken(
//                    issuer: _configuration.GetValue<string>("JWT:Issuer"),
//                    audience: _configuration.GetValue<string>("JWT:Audience"),
//                    claims: claims,
//                    expires: DateTime.Now.AddMinutes(6),
//                    signingCredentials: signinCredentials
//                );
//                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
//                return Ok(new { Token = tokenString });
//            }
//            return Unauthorized();
//        }
//    }
//}
