import requests as rq
import multiprocessing  as mp
import jsons ,random, string 



home_link = "http://localhost:4200/#/"

api_link = "http://localhost:8000/api/"

def test_home():
    rq.get(home_link)

def test_login():
    rq.get(home_link+"login")

def test_login_api(email,password):
    myobj = {'email': email , 'password' : password}

    x = rq.post(api_link+"login", data = myobj)
    return x.text

def test_register():
    rq.get(home_link+"register")


def test_register_api(name, phone , email, password, password_confirmation):
    myobj = {'name' : name , 'phone': phone ,'email': email , 'password' : password ,'password_confirmation' : password_confirmation}
    
    x = rq.post(api_link+"register", data = myobj)

    return x.text

def test_get_files_api(token):
    Headers = { "Authorization" : "Bearer " + token }
    return rq.get(api_link+"file/1" ,  headers=Headers )

def test_add_files_api(token ,title , matier ,classx):
    Headers = { "Authorization" : "Bearer " + token }
    files = {'course': open('supcom.jpg','rb')}
    myobj = {"title" : title,
            "matier" : matier,
            "class" : classx}
    return rq.post(api_link+"file/add" ,files=files, data=myobj,  headers=Headers )

def main_test(name, phone , email, password, password_confirmation,title , matier ,classx):
    test_login()
    test_register()
    test_register_api(name, phone , email, password, password_confirmation)
    token = jsons.loads(test_login_api(email, password))["access_token"]
    test_get_files_api(token)
    test_add_files_api(token, title , matier ,classx)


def random_char(char_num=10):
       return ''.join(random.choice(string.ascii_letters) for _ in range(char_num))


if __name__ == '__main__':
    dooo=True
    prosses = 0
    jobs = []
    for y in range(101):
        p = mp.Process(target=main_test, args=( random_char(),  random_char() , random_char()+"@gmail.com" ,  random_char(),  random_char(),  random_char(),  random_char(),  random_char()))
        p.start()
        jobs.append(p)
        prosses += 1
        print(prosses)
        if(prosses == 50):
            for job in jobs:
                job.join()           
            prosses = 0
            jobs = []
# main_test(generateRandomString() , generateRandomString() , random_char()+"@gmail.com" , generateRandomString() , generateRandomString() , generateRandomString() , generateRandomString() , generateRandomString() )